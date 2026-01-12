import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fabricio Pirini - Portfolio',
    short_name: 'F. Pirini',
    description: 'Senior Web Fullstack Engineer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon?id=icon-192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon?id=icon-512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
