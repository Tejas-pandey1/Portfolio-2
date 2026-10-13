'use client'

import { useEditor } from './editor-context'
import type { PropertyValue } from './types'

export function useEditable(elementId: string) {
  const { isEditor, getValue, updateProperty, selectElement, hoverElement, selectedElementId, hoveredElementId, beginGroup, commitGroup } = useEditor()

  const get = (key: string): PropertyValue => getValue(elementId, key)

  const set = (key: string, value: PropertyValue, label?: string) => {
    beginGroup()
    updateProperty(elementId, key, value, label)
    commitGroup(label ?? `Edit ${key}`)
  }

  const editorProps = isEditor
    ? {
        'data-edit-id': elementId,
        'data-edit-selected': selectedElementId === elementId ? 'true' : undefined,
        'data-edit-hovered': hoveredElementId === elementId ? 'true' : undefined,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault()
          e.stopPropagation()
          selectElement(elementId)
        },
        onMouseEnter: () => hoverElement(elementId),
        onMouseLeave: () => hoverElement(null),
      }
    : {}

  return { get, set, editorProps, isEditor, isSelected: selectedElementId === elementId }
}
