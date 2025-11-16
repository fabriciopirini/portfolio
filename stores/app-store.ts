import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage } from 'zustand/middleware'
import { uniq } from 'lodash-es'
import { PRODUCTS } from '@/app/services'

export const MAX_COINS = 9999

export type AppState = {
  _hasHydrated: boolean
  shouldShowSideBubble: boolean
  cartItems: string[]
  coins: number
  firstVisitTimestamp: number | undefined
}

export type AppActions = {
  setHasHydrated: (state: boolean) => void
  addProduct: (product: string) => void
  removeProduct: (product: string) => void
  hideSideBubble: () => void
  setCoins: (amount: number) => void
  addCoins: (amount: number) => void
  removeCoins: (amount: number) => void
  setFirstVisitTimestamp: (timestamp: number) => void
}

export type AppStore = AppState & AppActions

export const defaultInitState: AppState = {
  _hasHydrated: false,
  shouldShowSideBubble: true,
  cartItems: [],
  coins: 0,
  firstVisitTimestamp: undefined,
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
        addProduct: (product) =>
          set((state) => {
            const productPrice = PRODUCTS.find((p) => p.id === product)?.price ?? 0

            if (state.cartItems.includes(product) || state.coins < productPrice) {
              return state
            }

            return {
              cartItems: uniq([...state.cartItems, product]),
              coins: Math.max(0, state.coins - productPrice), // Ensure coins do not go negative
            }
          }),
        removeProduct: (product) =>
          set((state) => {
            const productPrice = PRODUCTS.find((p) => p.id === product)?.price ?? 0

            if (!state.cartItems.includes(product)) {
              return state
            }

            return { cartItems: state.cartItems.filter((p) => p !== product), coins: state.coins + productPrice }
          }),
        hideSideBubble: () => set({ shouldShowSideBubble: false }),
        setCoins: (amount) => set({ coins: amount }),
        addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
        removeCoins: (amount) => set((state) => ({ coins: state.coins - amount })),
        setFirstVisitTimestamp: (timestamp) => set({ firstVisitTimestamp: timestamp }),
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
