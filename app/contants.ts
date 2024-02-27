import hoodie1 from '@/public/assets/products/hoodie-1.png'
import tShirtCirclesBlack from '@/public/assets/products/t-shirt-circles-black.png'
import bagWhite from '@/public/assets/products/bag-white.png'

export const PRODUCTS = [
  {
    id: 'product-1',
    name: 'Product 1',
    price: 100,
    description: 'This is a product.',
    featuredImage: {
      url: hoodie1.src,
      alt: 'Hoodie',
      width: hoodie1.width,
      height: hoodie1.height,
      altText: 'Hoodie',
    },
    images: [
      {
        url: hoodie1.src,
        altText: 'Hoodie',
      },
    ],
  },
  {
    id: 'product-2',
    name: 'Product 2',
    price: 200,
    description: 'This is a product.',
    featuredImage: {
      url: tShirtCirclesBlack.src,
      alt: 'T-Shirt Circles Black',
      width: tShirtCirclesBlack.width,
      height: tShirtCirclesBlack.height,
      altText: 'T-Shirt Circles Black',
    },
    images: [
      {
        url: tShirtCirclesBlack.src,
        altText: 'T-Shirt Circles Black',
      },
    ],
  },
  {
    id: 'product-3',
    name: 'Product 3',
    price: 300,
    description: 'This is a product.',
    featuredImage: {
      url: bagWhite.src,
      alt: 'Bag White',
      width: bagWhite.width,
      height: bagWhite.height,
      altText: 'Bag White',
    },
    images: [
      {
        url: bagWhite.src,
        altText: 'Bag White',
      },
    ],
  },
] as const
