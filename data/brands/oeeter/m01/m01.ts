import type { ProductDetails } from '~/types/product-details'

import { hf9Global } from '~/data/brands/h20floss/hf-9/hf-9-global'
import { fc166Global } from '~/data/brands/sawgmore/fc166/fc166-global'
import { fc165Global } from '~/data/brands/turewell/fc-165/fc-165-global'
import { wp660Global } from '~/data/brands/waterpik/wp-660/wp-660-global'
import { m01Global } from './m01-global'

const slug = 'reviews'

const oeeterM01: ProductDetails = {
  info: {
    slug: `${slug}/${m01Global.brand}/${m01Global.path}`,
    images: m01Global.images,
    alt: "Oeeter M01 Water Flosser, 600 ml.",
    title: "Oeeter M01 Water Flosser, 600 ml.",
    description: "The Oeeter M01 counter top water dental flosser offers 10 adjustable pressure settings, 3 cleaning modes, 7 tips, up to 1250-1700 pulses/min, pressure of 125psi,  and a 600 ml water reservoir for effective oral hygiene. Designed for effective teeth cleaning and gum health.",
    price: m01Global.productPrice,
    updatedDate: m01Global.updatedDate,
    buyLink: m01Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: m01Global.rating,
    video: m01Global.videoUrl,
    video2: m01Global.videoUrl2,
    characteristics: [
      "10 Adjustable Pressure Settings",
      "3 Cleaning Modes: Normal, Soft, Pulse",
      "7 Magnectic Flossing Tips for All Needs",
      "Convenient Magnetic Handle",
      "600 ml Water Reservoir",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Oeeter M01 Water" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The Oeeter M01 water dental flosser has received mixed reviews from customers. Many users appreciate its design, ease of use, and adjustable water pressure settings, which effectively clean teeth without causing gum irritation. However, some customers have reported issues with its durability and noise level.",
    subtext: "For a visual review and demonstration of the Oeeter M01, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Oeeter M01",
    data: [
      {
        title: "10 Adjustable Pressure Settings",
        description: "Customize your flossing routine with pressure levels up to 125PSI.",
      },
      {
        title: "3 Cleaning Modes",
        description: "Choose from Normal, Soft, and Pulse for tailored oral care.",
      },
      {
        title: "7 Magnetic Flossing Tips",
        description: "Includes tips for all needs: classic, periodontal, orthodontic, and tongue cleaning.",
      },
      {
        title: "Magnetic Handle",
        description: "Stylish and convenient handle design with an ON/OFF switch.",
      },
      {
        title: "600 ml Water Reservoir",
        description: "High-capacity reservoir for up to 180 seconds of continuous use.",
      },
      {
        title: "User-Friendly Design",
        description: "Easy-to-clean removable water reservoir and built-in tip storage.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Oeeter M01 with Similar Models",
    description: "Compare the Oeeter M01 Cordless Express with other models.",

    models: [
      {
        id: 1,
        path: `${slug}/${m01Global.brand}/${m01Global.path}`,
        model: "Oeeter M01",
        image: m01Global.images[0].thumbnail,
        alt: "Oeeter M01 Water Dental Flosser",
        prime: true,
        dimensions: "8 x 6 x 4 in, 20 oz",
        tips: "7 Tips",
        capacity: "600 ml.",
        highlight: "Price",
        problem: "Lower water capacity compared to competitors",
        price: m01Global.productPrice,
        satisfaction: m01Global.rating.stars,
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
      },
      {
        id: 4,
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
        id: 5,
        path: `${slug}/${fc166Global.brand}/${fc166Global.path}`,
        model: "Sawgmore FC166",
        image: fc166Global.images[0].thumbnail,
        alt: "FC166 Water Flosser",
        prime: true,
        dimensions: "7.9 x 4.5 x 3.9 in, 20 oz",
        tips: "8",
        capacity: "600 ml.",
        highlight: "10 adjustable pressure levels",
        problem: "May require frequent refills at high settings",
        price: fc166Global.productPrice,
        satisfaction: fc166Global.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "What makes the Oeeter M01 a great choice.",
    cta: "Buy on Amazon",
    buyLink: m01Global.amazonUrl,
    pros: [
      { title: "Adjustable pressure for personalized cleaning" },
      { title: "Multiple tips for diverse oral care needs" },
      { title: "Large water reservoir for extended use" },
    ],
    cons: [
      { title: "Noisy" },
      { title: "Durability may be a concern" },
    ],
  },
}

export default oeeterM01
