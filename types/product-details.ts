export interface ProductDetails {
  info: {
    slug: string
    images: { url: string; thumbnail: string }[],
    alt: string
    title: string
    description: string
    price: string
    updatedDate: string
    buyLink: string
    cta: string
    video: string
    video2?: string
    rating: {
      stars: number
      reviews: number
    }
    characteristics: string[]
  }
  tableOfContent: {
    id: string
    content: string
  }[],
  title: {
    id: string
    title: string
    description: string
    subtext?: string
  }
  features: {
    id: string
    title: string
    data: {
      title: string
      description: string
    }[]
  },
  comparison: {
    id: string
    title: string
    description: string
    models: {
      id: number
      path: string
      model: string
      image: string
      alt: string
      prime: boolean
      dimensions: string
      tips: string
      capacity: string
      highlight: string
      problem: string
      price: string
      satisfaction: number
    }[]
  },
  proAndCons: {
    id: string
    title: string
    description: string
    cta: string
    buyLink: string
    pros: { title: string }[],
    cons: { title: string }[]
  },
}
