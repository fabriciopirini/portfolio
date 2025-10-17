import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock the PRODUCTS array before importing the store
vi.mock('@/app/services', () => ({
  PRODUCTS: [
    { id: '1', name: 'Test Product', price: 10 },
    { id: '2', name: 'Expensive', price: 100 },
  ],
}))

import { createAppStore } from '@/stores/app-store'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

vi.stubGlobal('localStorage', localStorageMock)

describe('Cart Store', () => {
  let store: ReturnType<typeof createAppStore>

  beforeEach(() => {
    localStorageMock.clear()
    store = createAppStore()
  })

  describe('addProduct', () => {
    it('adds product to cart and deducts correct price from coins', () => {
      store.getState().setCoins(50)
      const initialCoins = store.getState().coins

      store.getState().addProduct('1')

      const state = store.getState()
      expect(state.cartItems).toHaveLength(1)
      expect(state.cartItems[0]).toEqual('1')
      expect(state.coins).toBe(initialCoins - 10)
    })

    it("doesn't add duplicate products to cart", () => {
      store.getState().setCoins(50)

      store.getState().addProduct('1')
      store.getState().addProduct('1')

      const state = store.getState()
      expect(state.cartItems).toHaveLength(1)
    })

    it("doesn't add product when insufficient coins", () => {
      store.getState().setCoins(5)

      store.getState().addProduct('2') // Expensive product costs 100

      const state = store.getState()
      expect(state.cartItems).toHaveLength(0)
      expect(state.coins).toBe(5)
    })

    it('ensures coins never go negative', () => {
      store.getState().setCoins(5)

      store.getState().addProduct('1') // Product costs 10

      const state = store.getState()
      expect(state.coins).toBeGreaterThanOrEqual(0)
      expect(state.cartItems).toHaveLength(0)
    })
  })

  describe('removeProduct', () => {
    it('removes product from cart and refunds coins', () => {
      store.getState().setCoins(50)
      store.getState().addProduct('1')
      const coinsAfterAdd = store.getState().coins

      store.getState().removeProduct('1')

      const state = store.getState()
      expect(state.cartItems).toHaveLength(0)
      expect(state.coins).toBe(coinsAfterAdd + 10)
    })

    it("doesn't modify state if product not in cart", () => {
      const initialState = store.getState()
      const initialCoins = initialState.coins

      store.getState().removeProduct('nonexistent-id')

      const state = store.getState()
      expect(state.cartItems).toHaveLength(0)
      expect(state.coins).toBe(initialCoins)
    })
  })

  describe('coin operations', () => {
    it('setCoins sets exact coin amount', () => {
      store.getState().setCoins(100)
      expect(store.getState().coins).toBe(100)

      store.getState().setCoins(0)
      expect(store.getState().coins).toBe(0)
    })

    it('addCoins increases coin count correctly', () => {
      const initialCoins = store.getState().coins

      store.getState().addCoins(50)
      expect(store.getState().coins).toBe(initialCoins + 50)

      store.getState().addCoins(25)
      expect(store.getState().coins).toBe(initialCoins + 75)
    })

    it('removeCoins decreases coin count correctly', () => {
      store.getState().setCoins(100)

      store.getState().removeCoins(30)
      expect(store.getState().coins).toBe(70)

      store.getState().removeCoins(20)
      expect(store.getState().coins).toBe(50)
    })
  })
})
