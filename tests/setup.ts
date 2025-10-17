import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/node'

// Start MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

// Reset handlers after each test to ensure test isolation
afterEach(() => server.resetHandlers())

// Close MSW server after all tests
afterAll(() => server.close())
