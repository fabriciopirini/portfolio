import { AddToCart } from '@/components/ServicesImages/AddToCart'
import { DataTrends } from '@/components/ServicesImages/DataTrends'
import { ExperienceDesign } from '@/components/ServicesImages/ExperienceDesign'
import { FastLoading } from '@/components/ServicesImages/FastLoading'
import { Responsive } from '@/components/ServicesImages/Responsive'
import { SearchEngines } from '@/components/ServicesImages/SearchEngines'
import { SEOImage } from '@/components/ServicesImages/SEO'
import { SuccessPurchase } from '@/components/ServicesImages/SuccessPurchase'

const IMAGE_STYLES = 'w-auto max-w-full object-contain object-center h-36 lg:h-[250px]'

export const PRODUCTS = [
  {
    id: 'product-1',
    name: 'Performance Audit',
    price: 100,
    description:
      "Find what's slow before your users do. A deep look at where your interface loses time, trust, and conversions.",
    featuredImage: {
      staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />,
      altText:
        'Magnifying glass over a web page, illustrating an audit that identifies where interfaces lose time and conversions.',
    },
  },
  {
    id: 'product-2',
    name: 'Core Web Vitals',
    price: 200,
    description:
      'LCP, CLS, INP — the scores that actually affect how your product feels. Fixed properly, not hacked green.',
    featuredImage: {
      staticImage: <SearchEngines className={IMAGE_STYLES} color="#373943" />,
      altText: 'Trophy icon representing improved Core Web Vitals scores for LCP, CLS, and INP.',
    },
  },
  {
    id: 'product-3',
    name: 'Responsive Design',
    price: 300,
    description:
      'Every breakpoint is a design decision. Fluid layouts that hold up on any screen without falling apart at the edges.',
    featuredImage: {
      staticImage: <Responsive className={IMAGE_STYLES} color="#373943" />,
      altText:
        'Desktop, tablet, and mobile phone showing the same layout, illustrating responsive design across all screen sizes.',
    },
  },
  {
    id: 'product-4',
    name: 'UI Performance',
    price: 400,
    description:
      "Render times, bundle sizes, animation jank. An interface that feels fast is one users trust. Let's make yours feel fast.",
    featuredImage: {
      staticImage: <FastLoading className={IMAGE_STYLES} color="#373943" />,
      altText:
        'Stopwatch icon representing UI performance work focused on render times, bundle sizes, and animation quality.',
    },
  },
  {
    id: 'product-5',
    name: 'Component Library',
    price: 500,
    description:
      'Reusable, accessible, type-safe. The kind of components your team actually wants to use instead of working around.',
    featuredImage: {
      staticImage: <AddToCart className={IMAGE_STYLES} color="#373943" />,
      altText: 'Shopping cart with a check mark, representing a component library built for reuse and accessibility.',
    },
  },
  {
    id: 'product-6',
    name: 'Design System Setup',
    price: 600,
    description:
      'Tokens, components, documentation. The foundation that lets design and engineering move without stepping on each other.',
    featuredImage: {
      staticImage: <DataTrends className={IMAGE_STYLES} color="#373943" />,
      altText: 'Charts icon representing a design system setup with tokens, components, and documentation.',
    },
  },
  {
    id: 'product-7',
    name: 'UX & Interface Design',
    price: 600,
    description:
      'Interfaces that look exactly as intended and feel better than expected. From Figma to production without the gap.',
    featuredImage: {
      staticImage: <ExperienceDesign className={IMAGE_STYLES} color="#373943" />,
      altText: 'User with a heart icon, representing UX and interface design that bridges Figma and production.',
    },
  },
  {
    id: 'product-8',
    name: 'Design to Production',
    price: 600,
    description:
      'The handoff that usually breaks things. Done right, designers and engineers ship from the same source of truth.',
    featuredImage: {
      staticImage: <SuccessPurchase className={IMAGE_STYLES} color="#373943" />,
      altText:
        'Handshake icon representing a design-to-production service where designers and engineers share a single source of truth.',
    },
  },
  // {
  //   id: 'product-9',
  //   name: 'Performance Optimization',
  //   price: 700,
  //   description:
  //     'Enhance the agility of your site with performance optimizations that ensure peak efficiency under any load, keeping your digital space swift and robust.',
  //   featuredImage: {
  //     staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />, // Placeholder, as specific component not provided
  //     altText:
  //       'Icon of a speedometer and lightning bolt, symbolizing the service of optimizing website performance for maximum speed and efficiency.',
  //   },
  // },
  // {
  //   id: 'product-10',
  //   name: 'Accessibility Compliance',
  //   price: 800,
  //   description:
  //     'Expand your audience by making your website universally accessible, adhering to compliance standards and inclusive design principles.',
  //   featuredImage: {
  //     staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />, // Placeholder, as specific component not provided
  //     altText:
  //       "Icon of universal accessibility symbols, representing the service's focus on ensuring website compliance with accessibility standards for inclusivity.",
  //   },
  // },
  // {
  //   id: 'product-11',
  //   name: 'Content Management Solutions',
  //   price: 900,
  //   description:
  //     "Streamline your website's content updates with intuitive management solutions, allowing for easy edits and consistent freshness of information.",
  //   featuredImage: {
  //     staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />, // Placeholder, as specific component not provided
  //     altText:
  //       'Icon of a pencil and a gear, depicting the service of providing content management systems for easy website updates and maintenance.',
  //   },
  // },
  // {
  //   id: 'product-12',
  //   name: 'E-commerce Integration',
  //   price: 1000,
  //   description:
  //     'Seamlessly integrate advanced e-commerce solutions into your website to provide a robust online shopping platform for your users.',
  //   featuredImage: {
  //     staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />, // Placeholder, as specific component not provided
  //     altText:
  //       "Icon of a shopping cart and gears, indicating the service's specialization in incorporating e-commerce functionality into websites.",
  //   },
  // },
  // {
  //   id: 'product-13',
  //   name: 'Cloud Hosting Services',
  //   price: 1100,
  //   description:
  //     "Ensure your website's reliability with our cloud hosting services, offering scalable resources and unparalleled uptime.",
  //   featuredImage: {
  //     staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />, // Placeholder, as specific component not provided
  //     altText:
  //       "Icon of a cloud with an upward arrow, denoting the service's cloud hosting capabilities for dependable website availability.",
  //   },
  // },
  // {
  //   id: 'product-14',
  //   name: 'Cybersecurity Assurance',
  //   price: 1200,
  //   description:
  //     'Protect your digital assets with our cybersecurity services, offering comprehensive defense against threats and peace of mind for your users.',
  //   featuredImage: {
  //     staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />, // Placeholder, as specific component not provided
  //     altText:
  //       "Icon of a shield with a check mark, illustrating the service's commitment to providing top-notch cybersecurity for websites.",
  //   },
  // },
] as const
