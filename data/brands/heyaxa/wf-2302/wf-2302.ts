import type { ProductDetails } from '~/types/product-details'

import { hf9Global } from '~/data/brands/h20floss/hf-9/hf-9-global'
import { fc166Global } from '~/data/brands/sawgmore/fc166/fc166-global'
import { fc165Global } from '~/data/brands/turewell/fc-165/fc-165-global'
import { wp660Global } from '~/data/brands/waterpik/wp-660/wp-660-global'
import { wf2302Global } from './wf-2302-global'

const slug = 'reviews'

const heyaxa2302WF: ProductDetails = {
  info: {
    slug: `${slug}/${wf2302Global.brand}/${wf2302Global.path}`,
    images: wf2302Global.images,
    alt: "Heyaxa 2302WF Water Flosser",
    title: "Heyaxa 2302WF Water Flosser, 1000 ml.",
    description:
      "The Heyaxa 2302WF counter top water flosser features a 1000 ml tank for 180 seconds of use, 10 adjustable pressure levels, 7 nozzles for family use, up to 1700 pulses/min, pressure range 30-125psi, and 360° rotating nozzles for thorough cleaning.",
    price: wf2302Global.productPrice,
    updatedDate: wf2302Global.updatedDate,
    buyLink: wf2302Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: wf2302Global.rating,
    video: wf2302Global.videoUrl,
    characteristics: [
      "1000 ml large water tank for uninterrupted cleaning",
      "10 adjustable pressure levels (30-125 PSI)",
      "7 nozzles for various oral care needs",
      "Unique UV storage compartment for hygiene",
      "Corded electric design for consistent power",
      "High pulsation frequency (1250-1700 pulses/min)",
      "360° rotating nozzles for thorough cleaning",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Heyaxa 2302WF" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "title",
    title: "User Feedback & Videos",
    description: "The overall sentiment of the reviews is positive, with most users praising the product's performance, especially its water pressure, large reservoir, and UV cleaning feature. While a few users noted issues like material quality and durability, the company’s excellent customer service mitigated these concerns.",
    subtext: "For a visual review and demonstration of the Heyaxa 2302WF, you may find the following video helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Heyaxa 2302WF",
    data: [
      {
        title: "Ultra-Powerful Water Flosser for Deep Clean",
        description:
          "Pulses up to 1700 pulses/min with 360° rotating nozzles for thorough cleaning, massaging gums, and preventing tooth stains.",
      },
      {
        title: "Large 1000ml Water Tank",
        description: "Provides up to 180 seconds of uninterrupted cleaning, perfect for family use.",
      },
      {
        title: "10 Adjustable Pressure Levels",
        description: "Pressure range from 30 to 125 PSI, suitable for all ages.",
      },
      {
        title: "7 Nozzles Included",
        description:
          "3 Classic Tips, 1 Periodontal Tip, 1 Orthodontic Tip, 1 Dental Plaque Tip, and 1 Tongue Cleaner for various cleaning needs.",
      },
      {
        title: "Unique UV Storage Compartment",
        description:
          "Hygienically stores nozzles with built-in UV light and easy access.",
      },
      {
        title: "Corded Electric Design",
        description: "Reliable power without charging issues.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Heyaxa 2302WF with Similar Models",
    description: "Compare the Heyaxa 2302WF Cordless Express with other models for travel and home use.",
    models: [
      {
        id: 1,
        path: `${slug}/${wf2302Global.brand}/${wf2302Global.path}`,
        model: "Heyaxa 2302WF",
        image: wf2302Global.images[0].thumbnail,
        alt: "Heyaxa 2302WF Water Flosser",
        prime: true,
        dimensions: "10 x 8 x 6 in, 34 oz",
        tips: "6",
        capacity: "1000 ml.",
        highlight: "Large 1000ml Water Tank",
        problem: "Noise level",
        price: wf2302Global.productPrice,
        satisfaction: wf2302Global.rating.stars,
      },
      {
        id: 2,
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
        id: 3,
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
    ],
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "An honest look at the benefits and drawbacks.",
    cta: "Buy on Amazon",
    buyLink: wf2302Global.amazonUrl,
    pros: [
      { title: "Large water tank for extended cleaning sessions" },
      { title: "10 pressure settings for customizable comfort" },
      { title: "Includes 7 nozzles for family use" },
      { title: "Built-in UV storage for hygienic nozzle maintenance" },
    ],
    cons: [
      { title: "Corded design may limit portability" },
      { title: "Noise levels up to 75 decibels during operation" },
    ],
  },
}


export default heyaxa2302WF