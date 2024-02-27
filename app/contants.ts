import hoodie1 from '@/public/assets/products/hoodie-1.png'
import babyOnesieWhite from '@/public/assets/products/baby-onesie-white-1.png'
import tShirtCirclesWhite from '@/public/assets/products/t-shirt-circles-white.png'
import cowboyHatTan from '@/public/assets/products/cowboy-hat-tan-2.png'
import bagWhite from '@/public/assets/products/bag-white.png'
import babyCapGray from '@/public/assets/products/baby-cap-gray.png'

export const PRODUCTS = [
  {
    id: 'product-1',
    name: 'Hoodie',
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
    name: 'T-Shirt Circles White',
    price: 200,
    description: 'This is a product.',
    featuredImage: {
      url: tShirtCirclesWhite.src,
      alt: 'T-Shirt Circles White',
      width: tShirtCirclesWhite.width,
      height: tShirtCirclesWhite.height,
      altText: 'T-Shirt Circles White',
    },
    images: [
      {
        url: tShirtCirclesWhite.src,
        altText: 'T-Shirt Circles White',
      },
    ],
  },
  {
    id: 'product-3',
    name: 'Bag White',
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
  {
    id: 'product-4',
    name: 'Baby Onesie White',
    price: 400,
    description: 'This is a product.',
    featuredImage: {
      url: babyOnesieWhite.src,
      alt: 'Baby Onesie White',
      width: babyOnesieWhite.width,
      height: babyOnesieWhite.height,
      altText: 'Baby Onesie White',
    },
    images: [
      {
        url: babyOnesieWhite.src,
        altText: 'Baby Onesie White',
      },
    ],
  },
  {
    id: 'product-5',
    name: 'Cowboy Hat Tan',
    price: 500,
    description: 'This is a product.',
    featuredImage: {
      url: cowboyHatTan.src,
      alt: 'Cowboy Hat Tan',
      width: cowboyHatTan.width,
      height: cowboyHatTan.height,
      altText: 'Cowboy Hat Tan',
    },
    images: [
      {
        url: cowboyHatTan.src,
        altText: 'Cowboy Hat Tan',
      },
    ],
  },
  {
    id: 'product-6',
    name: 'Baby Cap Gray',
    price: 600,
    description: 'This is a product.',
    featuredImage: {
      url: babyCapGray.src,
      alt: 'Baby Cap Gray',
      width: babyCapGray.width,
      height: babyCapGray.height,
      altText: 'Baby Cap Gray',
    },
    images: [
      {
        url: babyCapGray.src,
        altText: 'Baby Cap Gray',
      },
    ],
  },
] as const
