'use client'

import { createContext, type ReactNode, useContext, useRef } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { type AppStore, createAppStore } from '@/stores/app-store'

export const AppStoreContext = createContext<StoreApi<AppStore> | null>(null)

export interface CounterStoreProviderProps {
  children: ReactNode
}

export const AppStoreProvider = ({ children }: CounterStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AppStore>>()
  if (!storeRef.current) {
    storeRef.current = createAppStore()
  }

  return <AppStoreContext.Provider value={storeRef.current}>{children}</AppStoreContext.Provider>
}

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext)

  if (!appStoreContext) {
    throw new Error(`useAppStore must be use within AppStoreProvider`)
  }

  return useStore(appStoreContext, selector)
}
