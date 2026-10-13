'use client'

import { useEditor } from '@/lib/editor/editor-context'
import { EditorToolbar } from './editor-toolbar'
import { ElementTree } from './element-tree'
import { PropertyPanel } from './property-panel'
import { useEffect } from 'react'

export function EditorOverlay() {
  const { undo, redo, canUndo, canRedo } = useEditor()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault()
        if (canUndo) undo()
      }
      if ((e.metaKey || e.ctrlKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault()
        if (canRedo) redo()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [undo, redo, canUndo, canRedo])

  return (
    <>
      <link rel="stylesheet" href="/editor.css" />
      <div className="ve-editor-mode" style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
        {/* Left panel */}
        <div className="ve-panel ve-left-panel" style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: 280, overflowY: 'auto', pointerEvents: 'auto', borderRight: '1px solid #2a2a3e', display: 'flex', flexDirection: 'column' }}>
          <div className="ve-panel-header">Pages & Elements</div>
          <ElementTree />
        </div>

        {/* Right panel */}
        <div className="ve-panel ve-right-panel" style={{ position: 'fixed', right: 0, top: 0, bottom: 0, width: 320, overflowY: 'auto', pointerEvents: 'auto', borderLeft: '1px solid #2a2a3e', display: 'flex', flexDirection: 'column' }}>
          <PropertyPanel />
        </div>
      </div>
    </>
  )
}
