import { AddToCart } from '@/components/ServicesImages/AddToCart'
import { DataTrends } from '@/components/ServicesImages/DataTrends'
import { ExperienceDesign } from '@/components/ServicesImages/ExperienceDesign'
import { FastLoading } from '@/components/ServicesImages/FastLoading'
import { Responsive } from '@/components/ServicesImages/Responsive'
import { SearchEngines } from '@/components/ServicesImages/SearchEngines'
import { SEOImage } from '@/components/ServicesImages/SEO'
import { SuccessPurchase } from '@/components/ServicesImages/SuccessPurchase'
import { cn } from '@/lib/utils'

const IMAGE_STYLES = cn('size-auto max-w-full object-contain object-center max-h-36 md:max-h-[300px]')

export const PRODUCTS = [
  {
    id: 'product-1',
    name: 'Great SEO',
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featuredImage: {
      staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />,
      altText: 'Hoodie',
    },
  },
  {
    id: 'product-2',
    name: 'Rank #1 on Google',
    price: 200,
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: {
      staticImage: <SearchEngines className={IMAGE_STYLES} color="#373943" />,
      altText: 'T-Shirt Circles White',
    },
  },
  {
    id: 'product-3',
    name: 'Responsive Design',
    price: 300,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: {
      staticImage: <Responsive className={IMAGE_STYLES} color="#373943" />,
      altText: 'Bag White',
    },
  },
  {
    id: 'product-4',
    name: 'Ultra fast page load',
    price: 400,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featuredImage: {
      staticImage: <FastLoading className={IMAGE_STYLES} color="#373943" />,
      altText: 'Baby Onesie White',
    },
  },
  {
    id: 'product-5',
    name: 'Smooth checkout',
    price: 500,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featuredImage: {
      staticImage: <AddToCart className={IMAGE_STYLES} color="#373943" />,
      altText: 'Cowboy Hat Tan',
    },
  },
  {
    id: 'product-6',
    name: 'Top of the line analytics',
    price: 600,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featuredImage: {
      staticImage: <DataTrends className={IMAGE_STYLES} color="#373943" />,
      altText: 'Baby Cap Gray',
    },
  },
  {
    id: 'product-7',
    name: 'Great user experience',
    price: 600,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featuredImage: {
      staticImage: <ExperienceDesign className={IMAGE_STYLES} color="#373943" />,
      altText: 'Baby Cap Gray',
    },
  },
  {
    id: 'product-8',
    name: 'Customer loyalty',
    price: 600,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featuredImage: {
      staticImage: <SuccessPurchase className={IMAGE_STYLES} color="#373943" />,
      altText: 'Baby Cap Gray',
    },
  },
] as const
