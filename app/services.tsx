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
    name: 'Great SEO',
    price: 100,
    description:
      'Boost your web presence with SEO expertise that ensures your site is not just seen, but also heard across the digital landscape.',
    featuredImage: {
      staticImage: <SEOImage className={IMAGE_STYLES} color="#373943" />,
      altText:
        'Icon of a magnifying glass over a web page, symbolizing the service of enhancing website search engine optimization for better visibility.',
    },
  },
  {
    id: 'product-2',
    name: 'Rank #1 on Google',
    price: 200,
    description:
      "Drive your website to the top of Google's charts with smart SEO that translates into superior search dominance.",
    featuredImage: {
      staticImage: <SearchEngines className={IMAGE_STYLES} color="#373943" />,
      altText:
        "Icon of a trophy atop a number one, representing the service's goal of achieving the top rank on Google search results.",
    },
  },
  {
    id: 'product-3',
    name: 'Responsive Design',
    price: 300,
    description:
      'Crafting fluid, adaptable websites that provide seamless experiences on any device, from desktop to mobile.',
    featuredImage: {
      staticImage: <Responsive className={IMAGE_STYLES} color="#373943" />,
      altText:
        'Icon of a desktop monitor, tablet, and mobile phone displaying the same content, illustrating the service of creating responsive web designs that adapt to all devices.',
    },
  },
  {
    id: 'product-4',
    name: 'Ultra fast page load',
    price: 400,
    description:
      'Experience blistering speeds with webpages that load faster than the blink of an eye, reducing bounce rates and boosting user satisfaction.',
    featuredImage: {
      staticImage: <FastLoading className={IMAGE_STYLES} color="#373943" />,
      altText:
        "Icon of a stopwatch with a web page, indicating the service's focus on ultra-fast website loading times for improved user experience.",
    },
  },
  {
    id: 'product-5',
    name: 'Smooth checkout',
    price: 500,
    description:
      'Enjoy a checkout experience as smooth as silk, reducing cart abandonment and converting browsers into buyers.',
    featuredImage: {
      staticImage: <AddToCart className={IMAGE_STYLES} color="#373943" />,
      altText:
        'Icon of a smooth and simple checkout process with a shopping cart and a check mark, denoting a hassle-free payment experience.',
    },
  },
  {
    id: 'product-6',
    name: 'Top of the line analytics',
    price: 600,
    description:
      'Leverage comprehensive analytics that offer deep insights into user behavior, empowering data-driven decisions.',
    featuredImage: {
      staticImage: <DataTrends className={IMAGE_STYLES} color="#373943" />,
      altText:
        "Icon of advanced analytics charts and graphs, denoting the service's provision of comprehensive data insights for websites.",
    },
  },
  {
    id: 'product-7',
    name: 'Great user experience',
    price: 600,
    description: 'Delivering intuitive and enjoyable digital experiences that keep users coming back for more.',
    featuredImage: {
      staticImage: <ExperienceDesign className={IMAGE_STYLES} color="#373943" />,
      altText:
        "Icon of a user with a heart, representing the service's dedication to crafting websites with great user experience that customers love.",
    },
  },
  {
    id: 'product-8',
    name: 'Customer loyalty',
    price: 600,
    description:
      'Build lasting bonds with customers through tailored experiences that reward engagement and foster loyalty.',
    featuredImage: {
      staticImage: <SuccessPurchase className={IMAGE_STYLES} color="#373943" />,
      altText:
        "Icon of a handshake integrated with a heart, symbolizing the service's commitment to building customer loyalty through positive engagement.",
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
