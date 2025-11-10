"use client"

import { createContext, useState, useMemo, ReactNode } from 'react'

export const CentralLogoContext = createContext<{
  setCentralLogoVisible: (v: boolean) => void
  centralLogoVisible: boolean
} | null>(null)

export function CentralLogoProvider({ children }: { children: ReactNode }) {
  const [centralLogoVisible, setCentralLogoVisible] = useState(true)
  const contextValue = useMemo(() => ({ setCentralLogoVisible, centralLogoVisible }), [centralLogoVisible])
  return (
    <CentralLogoContext.Provider value={contextValue}>
      {children}
    </CentralLogoContext.Provider>
  )
}
