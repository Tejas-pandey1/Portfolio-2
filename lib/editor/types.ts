export type PropertyType =
  | 'text'
  | 'color'
  | 'image'
  | 'link'
  | 'number'
  | 'select'
  | 'shadow'
  | 'borderRadius'
  | 'spacing'
  | 'size'

export interface PropertySchema {
  key: string
  label: string
  type: PropertyType
  group: string
  options?: { label: string; value: string }[]
  unit?: string
  min?: number
  max?: number
  step?: number
}

export interface ElementSchema {
  id: string
  name: string
  type: string
  section: string
  sectionId: string
  properties: PropertySchema[]
}

export type PropertyValue = string | number | undefined

export interface ElementEdit {
  elementId: string
  elementName: string
  section: string
  sectionId: string
  type: string
  changes: Record<string, { from: PropertyValue; to: PropertyValue }>
}

export interface UploadAsset {
  id: string
  name: string
  dataUrl: string
  isUpload: true
}

export interface ProjectAsset {
  name: string
  path: string
  isUpload?: false
}

export type Asset = ProjectAsset | UploadAsset

export interface EditorState {
  version: number
  content: Record<string, Record<string, PropertyValue>>
  assets: UploadAsset[]
  customCss: Record<string, Record<string, string>>
}

export interface HistoryEntry {
  label: string
  state: EditorState
  timestamp: number
}

export interface GeneratePromptResult {
  markdown: string
  json: string
  edits: ElementEdit[]
  uploadedAssets: UploadAsset[]
}
