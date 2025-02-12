
import waterpikwp660 from "~/data/brands/waterpik/wp-660/wp-660"

import h2oflossHF9 from '~/data/brands/h20floss/hf-9/hf-9'
import turewellFC165 from '~/data/brands/turewell/fc-165/fc-165'
import type { ReviewGrid } from "~/types/review-grid"


export const bestCounter: ReviewGrid[] = [
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
    path: turewellFC165.info.slug,
    name: turewellFC165.info.title,
    image: turewellFC165.info.images[0].thumbnail,
    alt: turewellFC165.info.alt,
    price: turewellFC165.info.price,
    rating: turewellFC165.info.rating.stars,
    reviewCount: turewellFC165.info.rating.reviews,
    updatedDate: turewellFC165.info.updatedDate
  },
  {
    id: 3,
    path: h2oflossHF9.info.slug,
    name: h2oflossHF9.info.title,
    image: h2oflossHF9.info.images[0].thumbnail,
    alt: h2oflossHF9.info.alt,
    price: h2oflossHF9.info.price,
    rating: h2oflossHF9.info.rating.stars,
    reviewCount: h2oflossHF9.info.rating.reviews,
    updatedDate: h2oflossHF9.info.updatedDate
  },
]