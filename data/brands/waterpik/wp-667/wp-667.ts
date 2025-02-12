import type { ProductDetails } from '~/types/product-details'

import { hf9Global } from "~/data/brands/h20floss/hf-9/hf-9-global"
import { fc165Global } from "~/data/brands/turewell/fc-165/fc-165-global"
import { wp660Global } from "~/data/brands/waterpik/wp-660/wp-660-global"
import { wp662Global } from "~/data/brands/waterpik/wp-662/wp-662-global"
import { wp667Global } from './wp-667-global'

const slug = 'reviews'

const waterpikwp667: ProductDetails = {
  info: {
    slug: `${slug}/${wp667Global.brand}/${wp667Global.path}`,
    images: wp667Global.images,
    alt: "Waterpik Water Flosser WP 667 in Gray",
    title: "Waterpik WP-667 Water Flosser, 650 ml.",
    description: "The Waterpik Aquarius WP 667 Water Flosser is a fully featured water flosser with enhanced pressure, 10 customizable settings for a thorough clean, a gum-stimulating massage mode, and a built-in timer/pacer that pauses at 30 seconds and 1 minute to track flossing time. It includes a large reservoir for 90+ seconds of use without refilling, 7 tips for multiple users, a dishwasher-safe 22 oz removable reservoir, 360-degree tip rotation, and 10 safe and effective pressure settings.",
    price: wp667Global.productPrice,
    updatedDate: wp667Global.updatedDate,
    buyLink: wp667Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: wp667Global.rating,
    video: wp667Global.videoUrl,
    characteristics: [
      "10 Pressure Settings",
      "7 Flossing Tips for Multiple Needs",
      "Removable Water Reservoir with 90+ Seconds of Flossing Time",
      "Compact and Contemporary Design",
      "3-year limited manufacturer’s warranty",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#features", content: "Key Features" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The reviews are overwhelmingly positive, with users praising the Waterpik Aquarius for its ease of use, thoughtful design improvements, and effectiveness in enhancing dental hygiene routines, though there are minor critiques regarding specific design elements like the water tank lid.",
    subtext: "For a visual review and demonstration of the Waterpik Aquarius WP 667, you may find the following videos helpful:",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      { title: "10 Pressure Settings", description: "Ranging from extra low to extra high for customized cleaning." },
      { title: "7 Flossing Tips", description: "Includes Precision, Plaque Seeker, Orthodontic, and Pik Pocket tips." },
      { title: "Removable Water Reservoir", description: "Provides over 90 seconds of continuous flossing time." },
      { title: "ADA Accepted", description: "Clinically proven effective for plaque removal and gum health." },
      { title: "360-Degree Rotating Tip", description: "Easily reaches all areas, including back teeth." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "See how the Waterpik Aquarius WP 667 stacks up against other popular water flossers.",
    models: [
      {
        id: 1,
        path: `${slug}/${wp667Global.brand}/${wp667Global.path}`,
        model: "Waterpik WP 667",
        image: wp667Global.images[0].thumbnail,
        alt: "Waterpik Aquarius WP-667 in Gray",
        prime: false,
        dimensions: "3.8 x 4.7 x 10.3 in, ",
        tips: "7 Tips",
        capacity: "650 ml.",
        highlight: "10 Pressure Settings, ADA Accepted",
        problem: "Requires power outlet.",
        price: wp667Global.productPrice,
        satisfaction: wp667Global.rating.stars,
      },
      {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 1,
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
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "Understand the advantages and limitations of the Waterpik Aquarius WP-667.",
    cta: "Buy on Amazon",
    buyLink: wp667Global.amazonUrl,
    pros: [
      { title: "Effective plaque removal and gum health improvement." },
      { title: "Multiple tips for various dental needs." },
      { title: "ADA Accepted for safety and effectiveness." },
    ],
    cons: [
      { title: "Requires a power outlet; not cordless." },
      { title: "Larger footprint compared to portable models." },
    ],
  },
}

export default waterpikwp667
