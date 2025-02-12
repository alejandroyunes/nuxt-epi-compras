import type { ProductDetails } from '~/types/product-details'

import { hf9Global } from '~/data/brands/h20floss/hf-9/hf-9-global'
import { fc165Global } from "~/data/brands/turewell/fc-165/fc-165-global"
import { wp660Global } from "~/data/brands/waterpik/wp-660/wp-660-global"
import { wp662Global } from "~/data/brands/waterpik/wp-662/wp-662-global"
import { fc166Global } from './fc166-global'

const slug = 'reviews'

const sawgmoreFC166: ProductDetails = {
  info: {
    slug: `${slug}/${fc166Global.brand}/${fc166Global.path}`,
    images: fc166Global.images,
    alt: "Sawgmore FC166 Water Flosser Oral Irrigator ",
    title: "Sawgmore FC166 Water Flosser, 600 ml.",
    description: "The Sawgmore FC166 counter top water flosser comes with 8 kinds of unique tips and 10 adjustable pressure levels, up to 1250-1700 pulses/min, pressure range 30-125psi, a 600 ml tank for 90 seconds of use and a 360° nozzle rotation. The water flosser is perfect for cleaning teeth and gums, and is available in black and white.",
    price: fc166Global.productPrice,
    updatedDate: fc166Global.updatedDate,
    buyLink: fc166Global.amazonUrl,
    cta: "Buy Now on Amazon",
    rating: fc166Global.rating,
    video: fc166Global.videoUrl,
    characteristics: [
      "Level pressure control adjustment",
      "600 ml large detachable water tank",
      "6 Jets for various cleaning needs",
      "360° nozzle rotation",
      "Anti-leakage design ensures no liquid leaks during high-pressure use",
      "Available in black and white",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Sawgmore FC166" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The Sawgmore FC166 Water Flosser has received generally positive feedback from users. Many customers appreciate its effectiveness in cleaning teeth and gums, its large water tank capacity, and the variety of pressure settings and nozzle tips it offers. Users have found it to be a valuable addition to their oral hygiene routine, often highlighting its ability to remove plaque and food debris from hard-to-reach areas.",
    subtext: "For a visual review and demonstration of the Sawgmore FC166, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Best Features of the Sawgmore FC166",
    data: [
      { title: "Effectively Clean", description: "Removes food debris between teeth with 1250-1700 pulsations per minute." },
      { title: "Adjustable Cleaning Modes", description: "10 water pressure settings from 30 to 125 PSI." },
      { title: "Large Capacity", description: "600ML tank allows for 90 seconds of continuous use." },
      { title: "Multiple Nozzles", description: "6 kinds of unique tips for various cleaning needs." },
      { title: "Portable and Reliable", description: "Leak-proof design ensures safe and convenient use." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Sawgmore FC166 with Similar Models",
    description: "How the Sawgmore FC166 stands out in the market.",
    models: [
      {
        id: 1,
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
    ],
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the Sawgmore FC166",
    description: "An honest look at the Sawgmore FC166 Water Flosser.",
    cta: "Buy on Amazon",
    buyLink: fc166Global.amazonUrl,
    pros: [
      { title: "High quality and value" },
      { title: "Variety of interchangeable attachments" },
      { title: "Affordable pricing" },
    ],
    cons: [
      { title: "Large reservoir can be messy to refill" },
      { title: "Water pulsation can be noisy" },
    ],
  },
};

export default sawgmoreFC166