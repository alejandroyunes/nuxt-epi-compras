import synhopeM6Plus from "~/data/brands/synhope/m6-plus/m6-plus"
import waterpikwp580 from "~/data/brands/waterpik/wp-580/wp-580"
import waterpikwp660 from "~/data/brands/waterpik/wp-660/wp-660"
import waterpikwp662 from "~/data/brands/waterpik/wp-662/wp-662"
import h2oflossHF9 from "~/data/brands/h20floss/hf-9/hf-9"
import nicwellf5025 from "~/data/brands/nicwell/f5025/f5025"

import type { ReviewGrid } from "~/types/review-grid"

export const bestReviews: ReviewGrid[] = [
  {
    id: 1,
    path: waterpikwp660.info.slug,
    name: waterpikwp660.info.title,
    image: waterpikwp660.info.images[0].thumbnail,
    alt: waterpikwp660.info.alt,
    price: waterpikwp660.info.price,
    rating: waterpikwp660.info.rating.stars,
    reviewCount: waterpikwp660.info.rating.reviews,
    updatedDate: waterpikwp660.info.updatedDate
  },
  {
    id: 2,
    path: waterpikwp580.info.slug,
    name: waterpikwp580.info.title,
    image: waterpikwp580.info.images[0].thumbnail,
    alt: waterpikwp580.info.alt,
    price: waterpikwp580.info.price,
    rating: waterpikwp580.info.rating.stars,
    reviewCount: waterpikwp580.info.rating.reviews,
    updatedDate: waterpikwp580.info.updatedDate
  },
  {
    id: 3,
    path: synhopeM6Plus.info.slug,
    name: synhopeM6Plus.info.title,
    image: synhopeM6Plus.info.images[0].thumbnail,
    alt: synhopeM6Plus.info.alt,
    price: synhopeM6Plus.info.price,
    rating: synhopeM6Plus.info.rating.stars,
    reviewCount: synhopeM6Plus.info.rating.reviews,
    updatedDate: synhopeM6Plus.info.updatedDate
  },
  {
    id: 4,
    path: h2oflossHF9.info.slug,
    name: h2oflossHF9.info.title,
    image: h2oflossHF9.info.images[0].thumbnail,
    alt: h2oflossHF9.info.alt,
    price: h2oflossHF9.info.price,
    rating: h2oflossHF9.info.rating.stars,
    reviewCount: h2oflossHF9.info.rating.reviews,
    updatedDate: h2oflossHF9.info.updatedDate
  },
  {
    id: 5,
    path: waterpikwp662.info.slug,
    name: waterpikwp662.info.title,
    image: waterpikwp662.info.images[0].thumbnail,
    alt: waterpikwp662.info.alt,
    price: waterpikwp662.info.price,
    rating: waterpikwp662.info.rating.stars,
    reviewCount: waterpikwp662.info.rating.reviews,
    updatedDate: waterpikwp662.info.updatedDate
  },
  {
    id: 6,
    path: nicwellf5025.info.slug,
    name: nicwellf5025.info.title,
    image: nicwellf5025.info.images[0].thumbnail,
    alt: nicwellf5025.info.alt,
    price: nicwellf5025.info.price,
    rating: nicwellf5025.info.rating.stars,
    reviewCount: nicwellf5025.info.rating.reviews,
    updatedDate: nicwellf5025.info.updatedDate
  }
]