export type PrimitiveType = 'box' | 'pyramid'

export interface PrimitiveParams {
  id: string
  type: PrimitiveType
  width: number
  height: number
  depth: number
  position: [number, number, number]
  color: string
  selected?: boolean
}