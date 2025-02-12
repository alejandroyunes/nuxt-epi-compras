import h2oflossHF9 from '~/data/brands/h20floss/hf-9/hf-9'
import heyaxa2302WF from '~/data/brands/heyaxa/wf-2302/wf-2302'
import oeeterM01 from '~/data/brands/oeeter/m01/m01'
import sawgmoreFC166 from '~/data/brands/sawgmore/fc166/fc166'
import turewellFC162 from '~/data/brands/turewell/fc-162/fc-162'
import turewellFC165 from '~/data/brands/turewell/fc-165/fc-165'
import type { ReviewGrid } from "~/types/review-grid"



export const bestCounter: ReviewGrid[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    path: sawgmoreFC166.info.slug,
    name: sawgmoreFC166.info.title,
    image: sawgmoreFC166.info.images[0].thumbnail,
    alt: sawgmoreFC166.info.alt,
    price: sawgmoreFC166.info.price,
    rating: sawgmoreFC166.info.rating.stars,
    reviewCount: sawgmoreFC166.info.rating.reviews,
    updatedDate: sawgmoreFC166.info.updatedDate
  },
  {
    id: 4,
    path: oeeterM01.info.slug,
    name: oeeterM01.info.title,
    image: oeeterM01.info.images[0].thumbnail,
    alt: oeeterM01.info.alt,
    price: oeeterM01.info.price,
    rating: oeeterM01.info.rating.stars,
    reviewCount: oeeterM01.info.rating.reviews,
    updatedDate: oeeterM01.info.updatedDate
  },
  {
    id: 5,
    path: heyaxa2302WF.info.slug,
    name: heyaxa2302WF.info.title,
    image: heyaxa2302WF.info.images[0].thumbnail,
    alt: heyaxa2302WF.info.alt,
    price: heyaxa2302WF.info.price,
    rating: heyaxa2302WF.info.rating.stars,
    reviewCount: heyaxa2302WF.info.rating.reviews,
    updatedDate: heyaxa2302WF.info.updatedDate
  },
  {
    id: 6,
    path: turewellFC162.info.slug,
    name: turewellFC162.info.title,
    image: turewellFC162.info.images[0].thumbnail,
    alt: turewellFC162.info.alt,
    price: turewellFC162.info.price,
    rating: turewellFC162.info.rating.stars,
    reviewCount: turewellFC162.info.rating.reviews,
    updatedDate: turewellFC162.info.updatedDate
  }
]