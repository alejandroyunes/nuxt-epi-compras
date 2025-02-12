import type { ProductDetails } from '~/types/product-details'

import { fc1592Global } from '~/data/brands/nicefeel/fc1592/fc1592-global'
import { f5025Global } from '~/data/brands/nicwell/f5025/f5025-global'
import { wf02Global } from '~/data/brands/waterpik/wf-02/wf-02-global'
import { wp580Global } from '~/data/brands/waterpik/wp-580/wp-580-global'
import { fc256Global } from './fc256-global'

const slug = 'reviews'

const inSmartfc256: ProductDetails = {
  info: {
    slug: `${slug}/${fc256Global.brand}/${fc256Global.path}`,
    images: fc256Global.images,
    alt: 'InSmart FC256 Portable Water Dental Flosser, 300 ml.',
    title: "InSmart FC256 Portable Water Dental Flosser, 300 ml.",
    description: 'Upgrade your oral care routine with the InSmart Professional Portable Water Dental Flosser. Featuring a 300 ml detachable tank, up to 1800 pulses/minute, 4 cleaning modes, this rechargeable flosser ensures efficient plaque removal and gum health. Perfect for home and travel.',
    price: fc256Global.productPrice,
    updatedDate: fc256Global.updatedDate,
    buyLink: fc256Global.amazonUrl,
    cta: 'Buy on Amazon',
    rating: fc256Global.rating,
    video: fc256Global.videoUrl,
    characteristics: [
      "Cordless and Portable for home and travel use.",
      "Charging with all USB port.",
      "Nozzle Tips for the whole family.",
      "Convenient travel carrying bag.",
      "Long-lasting 2000 mAh rechargeable battery.",
      "Easy-to-clean detachable water tank.",
      "Quiet operation with four water pressure modes.",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the inSmart FC256" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "title",
    title: 'The Best of InSmart FC256',
    description: "This portable water flosser creates over 1400-1800 pulsations/min of water jets, reaching areas normal toothbrushes can't, ensuring healthy gums and a thorough teeth clean. Its IPX7 waterproof design allows for use in the shower, featuring four operation modes for a personalized experience.",
    subtext: 'With a large 300 ml water tank and extended 2000 mAh battery life, it\'s perfect for daily use at home and on the go.',
  },
  features: {
    id: "features",
    title: 'Why Choose InSmart FC256?',
    data: [
      {
        title: 'High Efficiency',
        description: 'Cleans 99.99% of food debris and plaque, designed for periodontitis and braces.',
      },
      {
        title: '4 Water Pressure Modes',
        description: 'Normal, Soft, Pulse, and DIY modes with a low-noise design.',
      },
      {
        title: 'Powerful Battery',
        description: 'Li-ion rechargeable battery operates for up to 30 days on a full charge, offering excellent standby time.',
      },
      {
        title: 'Memory Function',
        description: 'Remembers your preferred mode for next use.',
      },
    ]
  },
  comparison: {
    id: "comparison",
    title: 'Compare the InSmart FC256 with other irrigators',
    description: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
        path: `${slug}/${fc256Global.brand}/${fc256Global.path}`,
        model: 'InSmart FC256',
        image: fc256Global.images[0].thumbnail,
        alt: 'InSmart FC256 Oral Irrigator Image',
        prime: true,
        dimensions: '8.27 x 3.15 x 1.97 in, 14.07 oz',
        tips: '6',
        capacity: '300 ml.',
        highlight: 'Travel Carrying bag, Ease of use, Size, 4 Water Pressure Modes',
        problem: 'Battery Life, Durability, Nozzle Wear',
        price: fc256Global.productPrice,
        satisfaction: fc256Global.rating.stars,
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
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: 'Pros and Cons of InSmart FC256',
    cta: 'Buy on Amazon',
    buyLink: fc256Global.amazonUrl,
    description: "It's essential to consider these customer experiences to make an informed decision about the InSmart Professional Cordless Water Dental Flosser, ensuring it meets your needs for oral care and convenience.",
    pros: [
      {
        title: 'Large 300 ml water reservoir for uninterrupted use.',
      },
      {
        title: '1400-1800 pulses/minute high-pressure water pulse for effective cleaning.',
      },
      {
        title: 'Latest 2000mAh lithium battery for long-lasting use (up to 30 days on a full charge).',
      },
      {
        title: 'Low-noise design for a comfortable and quiet experience.',
      },
    ],
    cons: [
      {
        title: 'Reports of breakage after a few months of use, including issues with the device not holding a charge.',
      },
      {
        title: 'Complaints about the tip breaking, indicating potential fragility of the nozzle.',
      },
    ],
  },

};

export default inSmartfc256