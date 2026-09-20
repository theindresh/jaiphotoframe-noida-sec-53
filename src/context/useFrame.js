import { useContext } from 'react'
import { FrameContext } from './frameContextDef'

export function useFrame() {
  const context = useContext(FrameContext)
  if (!context) {
    throw new Error('useFrame must be used within a FrameProvider')
  }
  return context
}
