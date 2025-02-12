import type { ReviewGrid } from "~/types/review-grid"

import nicwellf5025 from '~/data/brands/nicwell/f5025/f5025'
import waterpikwf02 from '~/data/brands/waterpik/wf-02/wf-02'
import coslusf5020e from "~/data/brands/coslus/f5020e/f5020e"
import waterpikwp580 from "~/data/brands/waterpik/wp-580/wp-580"

export const bestPortable: ReviewGrid[] = [
  {
    id: 1,
    path: waterpikwf02.info.slug,
    name: waterpikwf02.info.title,
    image: waterpikwf02.info.images[0].thumbnail,
    alt: waterpikwf02.info.alt,
    price: waterpikwf02.info.price,
    rating: waterpikwf02.info.rating.stars,
    reviewCount: waterpikwf02.info.rating.reviews,
    updatedDate: waterpikwf02.info.updatedDate
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
    path: nicwellf5025.info.slug,
    name: nicwellf5025.info.title,
    image: nicwellf5025.info.images[0].thumbnail,
    alt: nicwellf5025.info.alt,
    price: nicwellf5025.info.price,
    rating: nicwellf5025.info.rating.stars,
    reviewCount: nicwellf5025.info.rating.reviews,
    updatedDate: nicwellf5025.info.updatedDate
  },
  {
    id: 4,
    path: coslusf5020e.info.slug,
    name: coslusf5020e.info.title,
    image: coslusf5020e.info.images[0].thumbnail,
    alt: coslusf5020e.info.alt,
    price: coslusf5020e.info.price,
    rating: coslusf5020e.info.rating.stars,
    reviewCount: coslusf5020e.info.rating.reviews,
    updatedDate: coslusf5020e.info.updatedDate
  }
]