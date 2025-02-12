import type { ProductDetails } from '~/types/product-details'

import { f5020eGlobal } from '~/data/brands/coslus/f5020e/f5020e-global'
import { fc1592Global } from '~/data/brands/nicefeel/fc1592/fc1592-global'
import { f5025Global } from '~/data/brands/nicwell/f5025/f5025-global'
import { wp580Global } from '../wp-580/wp-580-global'
import { wf02Global } from './wf-02-global'

const slug = 'reviews'

const waterpikwf02: ProductDetails = {
  info: {
    slug: `${slug}/${wf02Global.brand}/${wf02Global.path}`,
    images: wf02Global.images,
    alt: "Waterpik WF 02 Portable Express Portable Water Flosser, 148 ml.",
    title: "Waterpik WF 02 Portable Water Flosser, 148 ml.",
    description: "The Waterpik WF 02 Cordless Express Water Flosser is a portable, battery-operated device designed to enhance oral hygiene by effectively. It includes two Classic Jet Tips and a removable 5-ounce 148 ml water reservoir up to 30 seconds of flossing time. Up to 1200 pulses/min with 2 pressure settings.",
    price: wf02Global.productPrice,
    updatedDate: wf02Global.updatedDate,
    buyLink: wf02Global.amazonUrl,
    cta: 'Buy on Amazon',
    rating: wf02Global.rating,
    video: wf02Global.videoUrl,
    video2: wf02Global.videoUrl2,
    characteristics: [
      "1-year limited manufacturer's warranty",
      "Waterproof for Shower Use",
      "ADA Accepted",
      "Gum Health",
      "Waranty 1 Year 🔥",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Waterpik WF 02" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "Users appreciate the WF 02 for its ease of use and portability, noting its effectiveness in cleaning and suitability for travel. However, some users mention the reservoir's limited capacity, necessitating refills during use. Additionally, the lack of a rotating nozzle and absence of a travel pouch are noted as areas for improvement.",
    subtext: "For a visual review and demonstration of the Waterpik WF 02, you may find the following videos helpful:"
  },
  comparison: {
    id: "comparison",
    title: "Compare the Waterpik WF 02 with Similar Models",
    description: "Compare the Waterpik WF 02 Cordless Express with other models for travel and home use.",
    models: [
      {
        id: 1,
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
  features: {
    id: "features",
    title: "Key Features of the Waterpik WF 02",
    data: [
      {
        title: "Portability",
        description: "Powered by three AA batteries, the WF 02 eliminates the need for charging cables, enhancing its convenience for travel. Its lightweight and waterproof design allows for use in the shower, adding to its versatility."
      },
      {
        title: "Performance",
        description: "8 oz/min flow rate, 1200 pulses/min, 2 pressure settings, and 2 included flosser tips. Handle with an on/off slider, no chrome accents, rotating tip, travel bag, or plug."
      },
      {
        title: "Reservoir Capacity",
        description: "Equipped with a removable 5-ounce 148 ml water reservoir, the WF 02 provides up to 30 seconds of continuous flossing time. While this may require some users to refill during sessions, it is a common trait among portable water flossers."
      },
      {
        title: "Ease of Use",
        description: "The flosser includes two flossing tips and an advanced pressure control system with two settings. Its ergonomic design ensures a comfortable grip, and the absence of cords enhances maneuverability during use."
      }
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: "Pros and Cons Waterpik Model WF 02",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the Waterpik Cordless Express WF 02 is the right fit for them.",
    cta: 'Buy Now on Amazon',
    buyLink: wf02Global.amazonUrl,
    pros: [
      { title: 'Ideal for travel, small bathrooms, and on-the-go oral care.' },
      { title: 'Runs on 3 AA batteries (included), eliminating the need for charging cords.' },
      { title: 'Allows for use in the shower, enhancing versatility and convenience.' },
      { title: 'Removable 5-ounce reservoir with easy-fill design for convenient use.' },
    ],
    cons: [
      { title: 'Requires regular replacement of 3 AA batteries (every 1-2 months, depending on use).' },
      { title: 'The 5-ounce reservoir may require refilling for extended flossing sessions.' },
      { title: 'While customizable, the flosser provides only two pressure settings.' },
    ]
  },
}

export default waterpikwf02