import type { ProductDetails } from '~/types/product-details'

import { hf9Global } from "~/data/brands/h20floss/hf-9/hf-9-global"
import { fc165Global } from '~/data/brands/turewell/fc-165/fc-165-global'
import { wp660Global } from '~/data/brands/waterpik/wp-660/wp-660-global'
import { wp662Global } from "~/data/brands/waterpik/wp-662/wp-662-global"
import { fc162Global } from './fc-162-global'

const slug = 'reviews'

const turewellfc162: ProductDetails = {

  info: {
    slug: `${slug}/${fc162Global.brand}/${fc162Global.path}`,
    images: fc162Global.images,
    alt: "Turewell FC162 Water Flosser, 600 ml.",
    title: "Turewell FC162 Water Flosser, 600 ml.",
    description: "The Turewell FC162 counter top water flosser improves gum health and removes plaque. Featuring 10 adjustable pressure levels, 8 specialized water jet tips for family use, a 600ml water tank for 90 seconds of use, 30-125psi pressure range and pulses of up to 1250-1700 pulses/min.",
    price: fc162Global.productPrice,
    updatedDate: fc162Global.updatedDate,
    buyLink: fc162Global.amazonUrl,
    video: fc162Global.videoUrl,
    video2: fc162Global.videoUrl2,
    cta: "Buy on Amazon",
    rating: fc162Global.rating,
    characteristics: [
      "Corded Electric Power Source",
      "10 Adjustable Water Pressure Settings (30-125 PSI)",
      "8 Dental Water Jet Tips (3 high-pressure, 5 specialized)",
      "600ml Large Water Tank for 90 Seconds of Use",
      "360° Rotatable Nozzle",
      "Leakproof and Anti-Leak Design",
      "Suction Cups for Stability",
      "Heartiness Organizer for Storing Tips",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Turewell FC162" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "Turewell FC162 Water Dental Flosser",
    description: "The overall sentiment of the reviews is predominantly positive, with most users praising the product's performance, value for money, and ease of use. Several reviewers highlight its efficiency, craftsmanship, and compact design, with many expressing high satisfaction and strong recommendations. However, a few mixed and negative reviews mention concerns about durability, minor design flaws, or functional issues, indicating some variability in user experiences. Despite these, the general consensus leans favorably toward the product's quality and affordability.",
    subtext: "For a visual review and demonstration of the Turewell FC162, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Turewell FC162",
    data: [
      {
        title: "10 Adjustable Water Pressure Settings",
        description: "Customize pressure from 30-125 PSI for kids, beginners, and experienced users."
      },
      {
        title: "8 Dental Water Jet Tips",
        description: "Includes 3 ordinary high-pressure tips and 5 specialized tips (Orthodontic, Tongue Cleaner, Periodontal, Plaque, Toothbrush)."
      },
      {
        title: "600ml Large Water Tank",
        description: "Provides up to 90 seconds of uninterrupted use, with an easy on/off switch on the handle."
      },
      {
        title: "360° Rotatable Nozzle",
        description: "Reaches all areas of the mouth for effective tartar and food debris removal."
      },
      {
        title: "Suction Cups for Stability",
        description: "Prevents accidental sliding during use."
      },
      {
        title: "Leakproof and Anti-Leak Design",
        description: "Improved double-sealing rings ensure no water leakage."
      },
      {
        title: "Heartiness Organizer",
        description: "Stores tips in a clean and organized way."
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "We compare the Turewell FC162 with other popular dental flossers to help you make an informed decision.",
    models: [
      {
        id: 1,
        path: `${slug}/${fc162Global.brand}/${fc162Global.path}`,
        model: "Turewell FC162",
        image: fc162Global.images[0].thumbnail,
        alt: "Turewell FC162 Water Dental Flosser",
        prime: true,
        dimensions: "10 x 8 x 6 in, 20 oz",
        tips: "8",
        capacity: "600 ml.",
        highlight: "Affordable with solid performance",
        problem: "Corded power source may limit portability",
        price: fc162Global.productPrice,
        satisfaction: fc162Global.rating.stars,
      },
      {
        id: 2,
        path: `${slug}/${fc165Global.brand}/${fc165Global.path}`,
        model: 'Turewell FC165',
        image: fc165Global.images[0].thumbnail,
        alt: 'Turewell FC165 Oral Irrigator',
        prime: true,
        dimensions: '5.7 x 4.9 x 8.07 in, 20 oz',
        tips: '8',
        capacity: '600 ml.',
        highlight: '8 Nozzles',
        problem: 'Water Resistance',
        price: fc165Global.productPrice,
        satisfaction: fc165Global.rating.stars,
      },
      {
        id: 3,
        path: `${slug}/${wp660Global.brand}/${wp660Global.path}`,
        model: "Waterpik WP 660",
        image: wp660Global.images[0].thumbnail,
        alt: 'Waterpik WP-660 Oral Irrigator',
        prime: true,
        dimensions: '3.8 x 4.7 x 10.3 in, 22 oz',
        tips: "7 tips",
        capacity: "650 ml.",
        highlight: '10 Nozzles, Best value',
        problem: 'Noise, size',
        price: wp660Global.productPrice,
        satisfaction: wp660Global.rating.stars,
      },
      {
        id: 4,
        path: `${slug}/${wp662Global.brand}/${wp662Global.path}`,
        model: "Waterpik WP 662",
        image: wp662Global.images[0].thumbnail,
        alt: "Waterpik Aquarius WP 662",
        prime: true,
        dimensions: "3.8 x 4.7 x 10.3 in, 22 oz",
        tips: "7 Tips",
        capacity: "650 ml.",
        highlight: "Advanced pressure settings",
        problem: "Requires corded power",
        price: wp662Global.productPrice,
        satisfaction: wp662Global.rating.stars,
      },
      {
        id: 5,
        path: `${slug}/${hf9Global.brand}/${hf9Global.path}`,
        model: 'H2ofloss HF9',
        image: hf9Global.images[0].thumbnail,
        alt: 'H2ofloss HF 9 Oral Irrigator',
        prime: true,
        dimensions: '2.56 x 4 x 8.39 in, 28 oz',
        tips: '13',
        capacity: '800 ml.',
        highlight: 'User-Friendly Design',
        problem: 'Leaking Problems',
        price: hf9Global.productPrice,
        satisfaction: hf9Global.rating.stars,
      }
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Here's a breakdown of the pros and cons of the TUREWELL FC162 Water Dental Flosser.",
    cta: "Buy on Amazon",
    buyLink: fc162Global.amazonUrl,
    pros: [
      { title: "10 Pressure Settings for Customizable Use" },
      { title: "Large Water Tank for Longer Use" },
      { title: "8 Specialized Tips for Versatile Cleaning" },
      { title: "Heartiness Organizer for Convenient Tip Storage" },
    ],
    cons: [
      { title: "Corded Power Source" },
      { title: "May be too large for travel" },
    ],
  },
};


export default turewellfc162