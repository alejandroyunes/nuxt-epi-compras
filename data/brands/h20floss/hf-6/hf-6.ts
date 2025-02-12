import type { ProductDetails } from '~/types/product-details'

import { fc166Global } from '~/data/brands/sawgmore/fc166/fc166-global'
import { fc165Global } from '~/data/brands/turewell/fc-165/fc-165-global'
import { wp660Global } from '~/data/brands/waterpik/wp-660/wp-660-global'
import { wp662Global } from "~/data/brands/waterpik/wp-662/wp-662-global"
import { hf6Global } from './hf-6-global'

const slug = 'reviews'

const h2oflossHF6: ProductDetails = {
  info: {
    slug: `${slug}/${hf6Global.brand}/${hf6Global.path}`,
    images: hf6Global.images,
    alt: "H2ofloss HF 6 Cordless Portable Oral Irrigator",
    title: "H2ofloss HF 6 Cordless Portable Oral Irrigator, 300 ml.",
    description: "This portable water dental flosser has 5 adjustable water pressure settings ranging from a gentle 20 psi to a powerful 110 psi. Each setting provides a pulse frequency of 1300 pulses/min, providing a customized cleaning experience that effectively removes plaque and food particles and comfortably massages gums. Powered by a rechargeable battery that lasts double the time of other models, it can provide up to 30 days of use on a single 5-hour full charge. The cordless and lightweight design makes it fit easily for your bag and is ideal for home, office or traveling.  With a 300ml water tank and IPX7 waterproof feature, it ensures convenient and safe use. Includes 6 multifunction nozzles for various cleaning needs and an ergonomic design for comfortable grip. Backed by a 2-year guarantee.",
    price: hf6Global.productPrice,
    updatedDate: hf6Global.updatedDate,
    buyLink: hf6Global.amazonUrl,
    cta: "Buy Now on Amazon",
    rating: hf6Global.rating,
    video: hf6Global.videoUrl,
    video2: hf6Global.videoUrl2,
    characteristics: [
      "13 Multifunctional Tips",
      "5 Water Pressure Settings",
      "1200 Pulses/Minute Frequency",
      "Quiet design with 800 ml capacity",
      "24-month warranty for peace of mind 🔥",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the H2ofloss HF 9" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The sentiment around the H2ofloss HF 9 oral irrigator is generally positive. Users appreciate its effectiveness in removing plaque and debris, its large water capacity, and its quiet operation. Many reviews highlight its value for money, especially when compared to more expensive brands. However, some users have noted issues with leakage and the durability of the tips. Overall, it seems to be a well-regarded product for maintaining oral hygiene.",
    subtext: "For a visual review and demonstration of the H2ofloss HF 9, you may find the following videos helpful:"    
  },
  features: {
    id: "features",
    title: "Best features of the H2ofloss HF-9",
    data: [
      {
        title: "Multifunctional Tips",
        description: "13 multifunctional tips for versatile oral care.",
      },
      {
        title: "Water Pressure Settings",
        description: "5 customizable water pressure settings ranging from 5-110 PSI.",
      },
      {
        title: "Pulse Frequency",
        description: "1200 pulses/minute for effective plaque removal.",
      },
      {
        title: "User-Friendly Design",
        description: "Quiet design with overheat protection.",
      },
      {
        title: "Large Capacity",
        description: "800 ml water tank for convenience.",
      },
      {
        title: "Family Friendly",
        description: "Suitable for the whole family, including those with braces or implants.",
      },
      {
        title: "Pause Function",
        description: "Pause function on the handle for ease of use.",
      },
      {
        title: "Warranty",
        description: "24-month warranty and 24-hour email support.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the H2ofloss HF 9 with other irrigators",
    description: "In this table, you can see all the affordable countertop models, their features, notable advantages, user ratings, and the results of our analyses in 2024.",
    models: [
      {
        id: 1,
        path: `${slug}/${hf6Global.brand}/${hf6Global.path}`,
        model: 'H2ofloss HF9',
        image: hf6Global.images[0].thumbnail,
        alt: 'H2ofloss HF 9 Oral Irrigator',
        prime: true,
        dimensions: '2.56 x 4 x 8.39 in, 28 oz',
        tips: '13',
        capacity: '800 ml.',
        highlight: 'User-Friendly Design',
        problem: 'Leaking Problems',
        price: hf6Global.productPrice,
        satisfaction: hf6Global.rating.stars,
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
    id: "pros-and-cons",
    title: "Pros and Cons of the H2ofloss HF 9",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the H2ofloss Dental Water Flosser, HF-9, 800ml is the right fit for them.",
    cta: "Buy Now on Amazon",
    buyLink: hf6Global.amazonUrl,
    pros: [
      { title: "Great performance and cleaning capabilities" },
      { title: "Affordable, offering good value for the price" },
      { title: "User-friendly with easy pressure control" },
      { title: "Effective at cleaning between teeth" },
      { title: "24-month warranty and 24-hour email support" },
      { title: "Exclusive Prime price and free shipping to Colombia" },
    ],
    cons: [
      { title: "Mixed opinions on build quality and durability" },
      { title: "Noise levels may be bothersome for some users" },
      { title: "Leaks reported by some users" },
    ],
  },
};

export default h2oflossHF6;