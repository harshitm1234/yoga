import { useContext } from 'react'
import AppLayoutContext from './Context'

export default function useAppLayoutContext() {
  const context = useContext(AppLayoutContext)
  if (!context) {
    throw new Error('useAppLayoutContext is not exist')
  }
  return context
}
