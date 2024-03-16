import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage } from 'zustand/middleware'

export const MAX_COINS = 9999

export type AppState = {
  _hasHydrated: boolean
  isSideBubbleVisible: boolean
  cartItems: string[]
  coins: number
}

export type AppActions = {
  setHasHydrated: (state: boolean) => void
  addProduct: (product: string) => void
  removeProduct: (product: string) => void
  hideSideBubble: () => void
  setCoins: (amount: number) => void
  addCoins: (amount: number) => void
  removeCoins: (amount: number) => void
}

export type AppStore = AppState & AppActions

export const defaultInitState: AppState = {
  _hasHydrated: false,
  isSideBubbleVisible: true,
  cartItems: [],
  coins: 0,
}

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()(
    persist(
      (set) => ({
        ...initState,
        setHasHydrated: (state) => {
          set({
            _hasHydrated: state,
          })
        },
        addProduct: (product) => set((state) => ({ cartItems: [...new Set([...state.cartItems, product])] })),
        removeProduct: (product) => set((state) => ({ cartItems: state.cartItems.filter((p) => p !== product) })),
        hideSideBubble: () => set({ isSideBubbleVisible: false }),
        setCoins: (amount) => set({ coins: amount }),
        addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
        removeCoins: (amount) => set((state) => ({ coins: state.coins - amount })),
      }),
      {
        name: 'app-store',
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true)
        },
      }
    )
  )
}
