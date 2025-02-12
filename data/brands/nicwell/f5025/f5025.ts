import type { ProductDetails } from '~/types/product-details'

import { f5020eGlobal } from '~/data/brands/coslus/f5020e/f5020e-global'
import { fc1592Global } from '~/data/brands/nicefeel/fc1592/fc1592-global'
import { wf02Global } from '~/data/brands/waterpik/wf-02/wf-02-global'
import { wp580Global } from '~/data/brands/waterpik/wp-580/wp-580-global'
import { f5025Global } from './f5025-global'

const slug = 'reviews'

const nicwellf5025: ProductDetails = {
  info: {
    slug: `${slug}/${f5025Global.brand}/${f5025Global.path}`,
    images: f5025Global.images,
    alt: 'Nicwell F5025 Portable Water Dental Flosser, 200 ml.',
    title: 'Nicwell F5025 Portable Water Flosser, 200 ml.',
    description: 'The Nicwell F5025 Portable Water Flosser with a 200 ml reservoir for about 30 seconds of flossing time, 5 jet tips, 1400-1800 pulses/min, pressure range 30-110psi, and 4 cleaning modes.',
    price: f5025Global.productPrice,
    updatedDate: f5025Global.updatedDate,
    buyLink: f5025Global.amazonUrl,
    cta: 'Buy on Amazon',
    rating: f5025Global.rating,
    video: f5025Global.videoUrl,
    video2: f5025Global.videoUrl2,
    characteristics: [
      "Cordless, portable and chargeable",
      "Gentle pressure (1400/min) for sensitive teeth",
      "Low Noise",
      "5 jet tips for different cleaning needs",
      "IPX7 waterproof 🔥",
      "4 cleaning modes"
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Nicwell F5025" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The reviews convey a generally positive sentiment, highlighting the product’s affordability, strong performance, portability, and long battery life. Many users find it effective and recommend it, though concerns about durability, a small water reservoir, and the lack of a low battery alert are noted.",
    subtext: "For a visual review and demonstration of the Nicwell F5025, you may find the following videos helpful:"
  },
  comparison: {
    id: "comparison",
    title: 'Compare the Nicwell F5025 with other irrigators',
    description:
      'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
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
  features: {
    id: "features",
    title: "Key Features of the Nicwell F5025",
    data: [
      { title: "Advanced Pulsation Technology", description: "The Nicwell F5025 utilizes an upgraded pulsation technique that delivers high-pressure water pulses, effectively removing up to 99.99% of food residue. This deep cleaning action helps whiten teeth and improve gum health." },
      { title: "IPX7 Waterproof Rating", description: "With its double-sealing rings, the device is reliably waterproof, allowing for safe use in the bathroom or shower and easy cleaning." },
      { title: "Long-Lasting Battery Life", description: " Equipped with a powerful lithium battery, the flosser charges fully in about four hours and lasts for approximately 21 days of regular use. The USB charging feature adds convenience, enabling charging via various devices." },
      { title: "360-Degree Rotatable Nozzle", description: "This feature allows for comprehensive cleaning, reaching all areas of the mouth with ease." },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: 'Pros and Cons of Nicwell F5025',
    description:
      'In summary, while the oral irrigator has notable positive aspects such as value, cleanliness, ease of use, and overall performance, there are significant concerns regarding quality, water resistance, battery life, and the charging feature. Users\' experiences with these aspects vary, making it important for potential buyers to consider these factors based on their personal preferences and needs.',
    cta: 'Buy on Amazon',
    buyLink: f5025Global.amazonUrl,
    pros: [
      { title: 'Well worth the price.' },
      { title: 'Users like the cleanliness the product provides, effectively cleaning between teeth and leaving a clean feeling.' },
      { title: 'The oral irrigator is praised for being easy to use, offering convenience and cost-effectiveness in daily oral care routines.' },
      { title: 'Impressive overall performance for maintaining oral hygiene.' },
      { title: 'Convenient compared to traditional flossing.' },
    ],
    cons: [
      { title: 'Opinions on water resistance, battery life, and overall performance are mixed, indicating varying experiences among users.' },
      { title: 'Customers are not satisfied with the charging feature of the oral irrigator. They mention that the charger is a USB and they never have a usb charger in the bathroom.' },
    ],
  },
}

export default nicwellf5025