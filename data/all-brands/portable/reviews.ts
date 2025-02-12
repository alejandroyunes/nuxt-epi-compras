
import bitvaeC2 from '~/data/brands/bitvae/c2/c2'
import coslusf5020e from '~/data/brands/coslus/f5020e/f5020e'
import inSmartfc256 from '~/data/brands/inSmart/fc256/fc256'
import nicefeelfc1592 from '~/data/brands/nicefeel/fc1592/fc1592'
import nicwellf5025 from '~/data/brands/nicwell/f5025/f5025'
import waterpikwf02 from '~/data/brands/waterpik/wf-02/wf-02'
import synhopeM6Plus from "~/data/brands/synhope/m6-plus/m6-plus"
import waterpikwp580 from "~/data/brands/waterpik/wp-580/wp-580"
import panasonicEW1511W from '~/data/brands/panasonic/ew1511w/ew1511w'

import type { ReviewGrid } from "~/types/review-grid"


export const allPortable: ReviewGrid[] = [
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
    id: 5,
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
    id: 6,
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
    id: 7,
    path: bitvaeC2.info.slug,
    name: bitvaeC2.info.title,
    image: bitvaeC2.info.images[0].thumbnail,
    alt: bitvaeC2.info.alt,
    price: bitvaeC2.info.price,
    rating: bitvaeC2.info.rating.stars,
    reviewCount: bitvaeC2.info.rating.reviews,
    updatedDate: bitvaeC2.info.updatedDate
  },

  {
    id: 8,
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
    id: 9,
    path: panasonicEW1511W.info.slug,
    name: panasonicEW1511W.info.title,
    image: panasonicEW1511W.info.images[0].thumbnail,
    alt: panasonicEW1511W.info.alt,
    price: panasonicEW1511W.info.price,
    rating: panasonicEW1511W.info.rating.stars,
    reviewCount: panasonicEW1511W.info.rating.reviews,
    updatedDate: panasonicEW1511W.info.updatedDate
  },
]