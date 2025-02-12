import type { ProductDetails } from '~/types/product-details'

import { wp580Global } from './wp-580-global'

import { f5020eGlobal } from '~/data/brands/coslus/f5020e/f5020e-global'
import { fc1592Global } from '~/data/brands/nicefeel/fc1592/fc1592-global'
import { f5025Global } from '~/data/brands/nicwell/f5025/f5025-global'
import { wf02Global } from '~/data/brands/waterpik/wf-02/wf-02-global'

const slug = 'reviews'

const waterpikwp580: ProductDetails = {
  info: {
    images: wp580Global.images,
    slug: `${slug}/${wp580Global.brand}/${wp580Global.path}`,
    alt: "Waterpik WP 580 Portable Water Flosser",
    title: "Waterpik WP 580 Portable Water Flosser, 280 ml.",
    description: "The Waterpik Cordless WP 580 Advanced 2.0 Water Flosser is a rechargeable, portable water flosser designed for easy and effective dental care, featuring a 360-degree rotating tip, 280 ml water reservoir for 45 seconds of flossing time, rechargeable battery, 3 safe and effective pressure settings with PrecisionPulse technology, and up to 2-year manufacturer's warranty.",
    price: wp580Global.productPrice,
    updatedDate: wp580Global.updatedDate,
    buyLink: wp580Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: wp580Global.rating,
    video: wp580Global.videoUrl,
    video2: wp580Global.videoUrl2,
    characteristics: [
      "Cordless and Portable",
      "Rechargeable Battery",
      "3 Pressure Settings",
      "4 Flossing Tips Included",
      "4 hour rapid charge",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Waterpik WP 580" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The sentiment of the reviews is overwhelmingly positive, highlighting the Waterpik Cordless Advanced Water Flosser as an effective, convenient, and user-friendly product. Customers praise its portability, ease of use, cleaning ability, and features like waterproofing, rechargeable batteries, and ADA acceptance. While some mention minor drawbacks like the small water reservoir and occasional recharging needs, these are largely overshadowed by the product's benefits. Overall, it is viewed as a valuable addition to oral hygiene routines.",
    subtext: "For a visual review and demonstration of the Waterpik Cordless WP 580, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Waterpik Cordless Advanced 2.0",
    data: [
      { title: "Cordless and Portable", description: "Convenient for travel and small bathrooms." },
      { title: "Rechargeable Battery", description: "Lasts up to 4 weeks on a single charge." },
      { title: "3 Pressure Settings", description: "Allows for customization to suit your comfort level." },
      { title: "Waterproof", description: "Can be used in the shower for added convenience." },
      { title: "Easy to Fill Reservoir", description: "Effortlessly refill with water." },
      { title: "4 Flossing Tips Included", description: "Includes Precision, Plaque Seeker, and Orthodontic tips for various needs." },
      { title: "ADA Accepted", description: "Proven safe and effective by the American Dental Association." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Water Flossers",
    description: "Here's how the Waterpik Cordless Advanced 2.0 compares to other popular models:",
    models: [
      {
        id: 1,
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
        id: 4,
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
      {
        id: 5,
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
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the Waterpik Cordless Advanced 2.0",
    description: "Here's a summary of the advantages and disadvantages of the Waterpik Cordless Advanced 2.0 Water Flosser:",
    cta: "Buy on Amazon",
    buyLink: wp580Global.amazonUrl,
    pros: [
      { title: "Portable and travel-friendly" },
      { title: "Rechargeable with long battery life" },
      { title: "Waterproof for shower use" },
    ],
    cons: [
      { title: "Smaller water reservoir" },
      { title: "Higher price point" },],
  },
}

export default waterpikwp580