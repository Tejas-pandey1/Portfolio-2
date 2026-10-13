'use client'

import { createContext, useContext, useState, useCallback, useRef, useEffect, type ReactNode } from 'react'
import type { EditorState, HistoryEntry, PropertyValue, UploadAsset } from './types'
import { createBaselineState, BASELINE_CONTENT } from './baseline'

const STORAGE_KEY = 'visual-editor-state'
const MAX_HISTORY = 50

interface EditorContextValue {
  state: EditorState
  isEditor: boolean
  selectedElementId: string | null
  hoveredElementId: string | null
  canUndo: boolean
  canRedo: boolean
  historyLabel: string | null

  setEditor: (v: boolean) => void
  selectElement: (id: string | null) => void
  hoverElement: (id: string | null) => void

  getValue: (elementId: string, key: string) => PropertyValue
  updateProperty: (elementId: string, key: string, value: PropertyValue, label?: string) => void
  commitGroup: (label: string) => void
  beginGroup: () => void

  addUpload: (asset: UploadAsset) => void
  getUploads: () => UploadAsset[]

  undo: () => void
  redo: () => void
  reset: () => void
  restore: (state: EditorState) => void
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function useEditor() {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error('useEditor must be used within EditorProvider')
  return ctx
}

function loadFromStorage(): EditorState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed && parsed.version === 1 && parsed.content) return parsed
  } catch {}
  return null
}

function saveToStorage(state: EditorState) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}

function deepClone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v))
}

export function EditorProvider({ children }: { children: ReactNode }) {
  const [isEditor, setIsEditor] = useState(false)
  const [state, setState] = useState<EditorState>(() => createBaselineState())
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null)
  const [hoveredElementId, setHoveredElementId] = useState<string | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [redoStack, setRedoStack] = useState<HistoryEntry[]>([])
  const [historyLabel, setHistoryLabel] = useState<string | null>(null)
  const pendingGroupRef = useRef<EditorState | null>(null)

  useEffect(() => {
    const loaded = loadFromStorage()
    if (loaded) {
      setState(loaded)
      const baseline = createBaselineState()
      if (JSON.stringify(loaded.content) !== JSON.stringify(baseline.content)) {
        setHistory([{ label: 'Loaded saved edits', state: baseline, timestamp: Date.now() }])
      }
    }
  }, [])

  const setEditor = useCallback((v: boolean) => {
    setIsEditor(v)
  }, [])

  const selectElement = useCallback((id: string | null) => setSelectedElementId(id), [])
  const hoverElement = useCallback((id: string | null) => setHoveredElementId(id), [])

  const getValue = useCallback(
    (elementId: string, key: string): PropertyValue => {
      return state.content[elementId]?.[key] ?? BASELINE_CONTENT[elementId]?.[key]
    },
    [state],
  )

  const beginGroup = useCallback(() => {
    pendingGroupRef.current = deepClone(state)
  }, [state])

  const commitGroup = useCallback(
    (label: string) => {
      if (!pendingGroupRef.current) return
      setHistory((prev) => [
        ...prev.slice(-MAX_HISTORY + 1),
        { label, state: pendingGroupRef.current!, timestamp: Date.now() },
      ])
      setRedoStack([])
      setHistoryLabel(label)
      pendingGroupRef.current = null
      saveToStorage(state)
    },
    [state],
  )

  const updateProperty = useCallback(
    (elementId: string, key: string, value: PropertyValue, label?: string) => {
      setState((prev) => {
        const currentVal = prev.content[elementId]?.[key] ?? BASELINE_CONTENT[elementId]?.[key]
        if (currentVal === value) return prev

        if (!pendingGroupRef.current) {
          pendingGroupRef.current = deepClone(prev)
        }

        const next = deepClone(prev)
        if (!next.content[elementId]) {
          next.content[elementId] = { ...BASELINE_CONTENT[elementId] }
        }
        next.content[elementId][key] = value
        saveToStorage(next)
        return next
      })
    },
    [],
  )

  const addUpload = useCallback((asset: UploadAsset) => {
    setState((prev) => {
      const next = deepClone(prev)
      next.assets = [...next.assets.filter((a) => a.id !== asset.id), asset]
      saveToStorage(next)
      return next
    })
  }, [])

  const getUploads = useCallback(() => state.assets, [state.assets])

  const undo = useCallback(() => {
    setHistory((prevHistory) => {
      if (prevHistory.length === 0) return prevHistory
      const last = prevHistory[prevHistory.length - 1]
      setRedoStack((prevRedo) => [
        ...prevRedo,
        { label: 'Current state', state: deepClone(state), timestamp: Date.now() },
      ])
      setState(last.state)
      saveToStorage(last.state)
      setHistoryLabel(`Undo: ${last.label}`)
      return prevHistory.slice(0, -1)
    })
  }, [state])

  const redo = useCallback(() => {
    setRedoStack((prevRedo) => {
      if (prevRedo.length === 0) return prevRedo
      const next = prevRedo[prevRedo.length - 1]
      setHistory((prevHistory) => [
        ...prevHistory,
        { label: `Redo: ${next.label}`, state: deepClone(state), timestamp: Date.now() },
      ])
      setState(next.state)
      saveToStorage(next.state)
      setHistoryLabel(`Redo`)
      return prevRedo.slice(0, -1)
    })
  }, [state])

  const reset = useCallback(() => {
    const baseline = createBaselineState()
    setHistory((prev) => [
      ...prev.slice(-MAX_HISTORY + 1),
      { label: 'Reset to baseline', state: deepClone(state), timestamp: Date.now() },
    ])
    setRedoStack([])
    setState(baseline)
    saveToStorage(baseline)
    setHistoryLabel('Reset to baseline')
  }, [state])

  const restore = useCallback(
    (newState: EditorState) => {
      setHistory((prev) => [
        ...prev.slice(-MAX_HISTORY + 1),
        { label: 'Restore', state: deepClone(state), timestamp: Date.now() },
      ])
      setRedoStack([])
      setState(newState)
      saveToStorage(newState)
      setHistoryLabel('Restored')
    },
    [state],
  )

  const canUndo = history.length > 0
  const canRedo = redoStack.length > 0

  const value: EditorContextValue = {
    state,
    isEditor,
    selectedElementId,
    hoveredElementId,
    canUndo,
    canRedo,
    historyLabel,
    setEditor,
    selectElement,
    hoverElement,
    getValue,
    updateProperty,
    commitGroup,
    beginGroup,
    addUpload,
    getUploads,
    undo,
    redo,
    reset,
    restore,
  }

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}
