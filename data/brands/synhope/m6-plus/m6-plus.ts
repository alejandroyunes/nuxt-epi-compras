import type { ProductDetails } from '~/types/product-details'

import { fc1592Global } from '~/data/brands/nicefeel/fc1592/fc1592-global'
import { f5025Global } from '~/data/brands/nicwell/f5025/f5025-global'
import { wf02Global } from '~/data/brands/waterpik/wf-02/wf-02-global'
import { wp580Global } from '~/data/brands/waterpik/wp-580/wp-580-global'
import { m6PlusGlobal } from './m6-plus-global'

const slug = 'reviews'

const synhopeM6Plus: ProductDetails = {
  info: {
    slug: `${slug}/${m6PlusGlobal.brand}/${m6PlusGlobal.path}`,
    images: m6PlusGlobal.images,
    alt: "SynHope Mini Portable Water Flosser",
    title: "SynHope Mini Portable Water Flosser, 140 ml.",
    description: "The SynHope Mini Cordless Portable Water Flosser is highly recommended for those looking for a compact, efficient, and travel-friendly oral care solution.  Featuring a telescopic water tank, 3 cleaning modes, IPX7 waterproof design, long battery life and 30 days no reason refund warranty.",
    price: m6PlusGlobal.productPrice,
    updatedDate: m6PlusGlobal.updatedDate,
    buyLink: m6PlusGlobal.amazonUrl,
    cta: "Buy on Amazon",
    rating: m6PlusGlobal.rating,
    video: m6PlusGlobal.videoUrl,
    video2: m6PlusGlobal.videoUrl2,
    characteristics: [
      "Compact and portable design",
      "Telescopic water tank",
      "3 cleaning modes (Soft, Pulse, Strong)",
      "IPX7 waterproof for safe usage",
      "Continuous use for up to 30 days",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the SynHope Mini" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "Users appreciate its compact size, making it ideal for travel. Many find it powerful and effective in cleaning teeth, with some noting that it works as well as larger, more expensive models.",
    subtext: "For a visual review and demonstration of the SynHope Mini, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the SynHope Mini",
    data: [
      { title: "Compact Design", description: "Easy to carry with a telescopic water tank for portability." },
      { title: "High Pressure Performance", description: "1200 water pulses per minute with 140 PSI pressure." },
      { title: "3 Cleaning Modes", description: "Choose from Soft, Pulse, or Strong modes to suit your needs." },
      { title: "IPX7 Waterproof", description: "Safe to use under running water without leaks." },
      { title: "Long Battery Life", description: "Lasts up to 30 days on a full charge." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models of Water Flossers",
    description: "See how the SynHope Mini Cordless Water Flosser stacks up against similar products.",
    models: [
      {
        id: 1,
        path: `${slug}/${m6PlusGlobal.brand}/${m6PlusGlobal.path}`,
        model: "Synhope Mini Cordless",
        image: m6PlusGlobal.images[0].thumbnail,
        alt: "Synhope Mini Cordless Water Flosser",
        prime: true,
        dimensions: " 4.88 x 2.44 x 1.26 in, 5 oz",
        tips: "Includes 4 replacement jet tips",
        capacity: "140 ml.",
        highlight: "Portable design ideal for travel",
        problem: "Limited water capacity compared to larger models",
        price: m6PlusGlobal.productPrice,
        satisfaction: m6PlusGlobal.rating.stars,
      },
      {
        id: 2,
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
        id: 3,
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
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "An honest look at the strengths and limitations of the SYNHOPE Mini Cordless Water Flosser.",
    cta: "Buy on Amazon",
    buyLink: m6PlusGlobal.amazonUrl,
    pros: [
      { title: "Compact and travel-friendly" },
      { title: "Effective cleaning with high water pressure" },
      { title: "Long-lasting battery life" },
    ],
    cons: [
      { title: "Limited water tank capacity" },
      { title: "Not ideal for extensive cleaning sessions" },
    ],
  },
}

export default synhopeM6Plus
