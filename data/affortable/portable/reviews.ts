import type { ReviewGrid } from "~/types/review-grid"

import bitvaeC2 from '~/data/brands/bitvae/c2/c2'
import coslusf5020e from '~/data/brands/coslus/f5020e/f5020e'
import inSmartfc256 from '~/data/brands/inSmart/fc256/fc256'
import nicefeelfc1592 from '~/data/brands/nicefeel/fc1592/fc1592'
import nicwellf5025 from '~/data/brands/nicwell/f5025/f5025'
import waterpikwf02 from '~/data/brands/waterpik/wf-02/wf-02'

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
    id: 3,
    path: nicefeelfc1592.info.slug,
    name: nicefeelfc1592.info.title,
    image: nicefeelfc1592.info.images[0].thumbnail,
    alt: nicefeelfc1592.info.alt,
    price: nicefeelfc1592.info.price,
    rating: nicefeelfc1592.info.rating.stars,
    reviewCount: nicefeelfc1592.info.rating.reviews,
    updatedDate: nicefeelfc1592.info.updatedDate
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
  },
  {
    id: 5,
    path: inSmartfc256.info.slug,
    name: inSmartfc256.info.title,
    image: inSmartfc256.info.images[0].thumbnail,
    alt: inSmartfc256.info.alt,
    price: inSmartfc256.info.price,
    rating: inSmartfc256.info.rating.stars,
    reviewCount: inSmartfc256.info.rating.reviews,
    updatedDate: inSmartfc256.info.updatedDate
  },
  {
    id: 6,
    path: bitvaeC2.info.slug,
    name: bitvaeC2.info.title,
    image: bitvaeC2.info.images[0].thumbnail,
    alt: bitvaeC2.info.alt,
    price: bitvaeC2.info.price,
    rating: bitvaeC2.info.rating.stars,
    reviewCount: bitvaeC2.info.rating.reviews,
    updatedDate: bitvaeC2.info.updatedDate
  }
]