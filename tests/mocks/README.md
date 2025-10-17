# MSW (Mock Service Worker) Setup

This directory contains the MSW configuration for mocking HTTP requests in tests.

## Benefits of MSW over `vi.stubGlobal('fetch')`

1. **Network-level interception**: MSW intercepts requests at the network level, not by stubbing `fetch`, making tests more realistic
2. **Better maintainability**: Request handlers are defined once and reused across tests
3. **Test isolation**: Automatic handler reset between tests via `afterEach()` in setup
4. **Type safety**: Full TypeScript support with proper typing
5. **Runtime overrides**: Easy to override handlers for specific test cases using `server.use()`
6. **Industry standard**: MSW is the recommended approach by Next.js and Vitest documentation

## File Structure

- **`handlers.ts`**: Define default (happy path) request handlers
- **`node.ts`**: MSW server setup for Node.js environment (Vitest)
- **`../setup.ts`**: Vitest lifecycle integration (beforeAll, afterEach, afterAll)

## Usage in Tests

### Using Default Handlers

```typescript
it('uses default mocked response', async () => {
  const response = await GET(createMockRequest())
  expect(response.status).toBe(200)
})
```

### Overriding Handlers for Specific Tests

```typescript
it('handles error scenarios', async () => {
  server.use(
    http.get('https://api.example.com/endpoint', () => {
      return HttpResponse.error()
    })
  )
  
  const response = await GET(createMockRequest())
  expect(response.status).toBe(500)
})
```

## Resources

- [MSW Documentation](https://mswjs.io/)
- [MSW with Vitest](https://mswjs.io/docs/integrations/node)
- [Next.js Testing Docs](https://nextjs.org/docs/app/building-your-application/testing/vitest)

