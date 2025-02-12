import type { ProductDetails } from '~/types/product-details';

import { fc1592Global } from '~/data/brands/nicefeel/fc1592/fc1592-global';
import { f5025Global } from '~/data/brands/nicwell/f5025/f5025-global';
import { wf02Global } from '~/data/brands/waterpik/wf-02/wf-02-global';
import { wp580Global } from '~/data/brands/waterpik/wp-580/wp-580-global';
import { f5020eGlobal } from './f5020e-global';

const slug = 'reviews'

const coslusf5020e: ProductDetails = {
  info: {
    slug: `${slug}/${f5020eGlobal.brand}/${f5020eGlobal.path}`,
    images: f5020eGlobal.images,
    alt: 'Coslus F5020E Portable Water Dental Flosser, 300 ml.',
    title: "Coslus F5020E Portable Water Dental Flosser, 300 ml.",
    description: 'The Coslus F5020E water dental flosser stands out with its advanced 0.3mm+0.3mm ultra-fine dual-thread water pulse technology, delivering high-pressure pulses at 1400-1800 times per minute. The upgraded 300 ml water tank allows for fewer refills, making your oral cleaning routine more convenient and efficient.',
    price: f5020eGlobal.productPrice,
    updatedDate: f5020eGlobal.updatedDate,
    buyLink: f5020eGlobal.amazonUrl,
    cta: 'Buy on Amazon',
    rating: f5020eGlobal.rating,
    video: f5020eGlobal.videoUrl,
    video2: f5020eGlobal.videoUrl2,
    
    characteristics: [
      "Advanced Cleaning Technology",
      "Large Water Tank",
      "Long Battery Life",
      "Portable and Cordless",
      "Multiple Modes and Nozzles",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Coslus Model F5020E" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: 'User Feedback & Videos',
    description: "The sentiment towards the COSLUS Water Dental Flosser is generally positive, with users appreciating its ease of use, portability, and effectiveness in improving oral hygiene.",
    subtext: "Experience the benefits of a long-lasting 30-day battery life, providing portability for both home and travel."
  },
  features: {
    id: "features",
    title: "Why opt for the Coslus Model F5020E?",
    data: [
      {
        title: 'Advanced Technology',
        description: "Advanced 0.3mm+0.3mm ultra-fine dual-thread water pulse technology, professionally endorsed by an American dental team, removes 99.9% of dental plaque.",
      },
      {
        title: 'Large Water Tank',
        description: "Upgraded 300 ml extra-large water tank for fewer refills and a thorough cleaning experience.",
      },
      {
        title: 'Portable and Rechargeable',
        description: "Rechargeable, portable, and compact, offering 30 days of battery life with a 3-hour charge, perfect for home and on-the-go use.",
      },
      {
        title: 'Waterproof Design',
        description: "IPX7 waterproof, durable design ensures safe use in the shower and easy cleaning.",
      },
      {
        title: 'Adjustable Pressure Modes',
        description: "Three adjustable pressure modes (Soft, Massage, Clean) suitable for various age groups and preferences.",
      }
    ]
  },
  comparison: {
    id: "comparison",
    title: 'Compare the Coslus F5020E with other irrigators',
    description: 'Explore the features, advantages, and user satisfaction ratings of top irrigator models in 2025.',
    models: [
      {
        id: 1,
        path: `${slug}/${f5020eGlobal.brand}/${f5020eGlobal.path}`,
        model: 'Coslus F5020E',
        image: f5020eGlobal.images[0].thumbnail,
        alt: 'Coslus F5020E Oral Irrigator',
        prime: true,
        dimensions: '2.17 x 2.74 x 12.2 in, 10 oz',
        tips: '5',
        capacity: '300 ml.',
        highlight: 'Dual-thread stream, Child mode, IPX7 waterproof',
        problem: 'Limited water capacity',
        price: f5020eGlobal.productPrice,
        satisfaction: f5020eGlobal.rating.stars,
      },
      {
        id: 2,
        path: `${slug}/${wf02Global.brand}/${wf02Global.path}`,
        model: 'Waterpik WF 02',
        image: wf02Global.images[0].thumbnail,
        alt: 'Waterpik Model WF 02',
        prime: true,
        dimensions: "3.6 x 2.5 x 11.75 in, 5 oz",
        tips: "Includes 2 Classic Jet Tips",
        capacity: "148 ml.",
        highlight: "No outlets or charging needed",
        problem: "Requires regular battery replacement",
        price: wf02Global.productPrice,
        satisfaction: wf02Global.rating.stars,
      },
      {
        id: 3,
        path: `${slug}/${wp580Global.brand}/${wp580Global.path}`,
        model: "Waterpik WP 580",
        image: wp580Global.images[0].thumbnail,
        alt: "Waterpik Cordless Express Water Flosser",
        prime: false,
        dimensions: "4 x 2.8 x 11.6 in, 12.8 oz",
        tips: "4 tips",
        capacity: "280 ml.",
        highlight: "Most affordable",
        problem: "Shorter battery life",
        price: wp580Global.productPrice,
        satisfaction: wp580Global.rating.stars,
      },
      {
        id: 4,
        path: `${slug}/${f5025Global.brand}/${f5025Global.path}`,
        model: 'Nicwell F5025',
        image: f5025Global.images[0].thumbnail,
        alt: 'Nicwell 200 ml Oral Irrigator',
        prime: true,
        dimensions: '8.11 x 4.06 x 2.73 in, 7 oz',
        tips: "5 tips",
        capacity: "200 ml.",
        highlight: "360° rotatable",
        problem: "Slightly heavier",
        price: f5025Global.productPrice,
        satisfaction: f5025Global.rating.stars
      },
      {
        id: 5,
        path: `${slug}/${fc1592Global.brand}/${fc1592Global.path}`,
        model: 'Nicefeel FC1592',
        image: fc1592Global.images[0].thumbnail,
        alt: 'Nicefeel FC1592 Oral Irrigator Image',
        prime: true,
        dimensions: '0.3 x 0.31 x 0.87 in, 10 oz',
        tips: '4 Tips',
        capacity: '300 ml.',
        highlight: '3 Cleaning Modes',
        problem: 'Not suitable for large families',
        price: fc1592Global.productPrice,
        satisfaction: fc1592Global.rating.stars,
      },
    ],
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: "Pros and Cons of Coslus F5020E",
    description: "While praised for its outstanding value, users note considerations for improvement, expressing a desire for more nozzle options and variations in size preferences. Either way, the Coslus FC165 offers efficient plaque removal, unmatched portability, and user-friendly design.",
    cta: 'Buy Now on Amazon',
    buyLink: f5020eGlobal.amazonUrl,
    pros: [
      {
        title: 'Ease of Use',
      },
      {
        title: 'Large Water Tank',
      },
      {
        title: 'Durability',
      },
      {
        title: 'Cost-effective choice.',
      },
    ],
    cons: [
      {
        title: 'Some users desire more nozzle options for enhanced versatility in addressing different oral care needs.',
      },
      {
        title: 'While praised for portability, individual preferences may vary, and some users might prefer a larger water tank.',
      },
    ],
  },
}

export default coslusf5020e