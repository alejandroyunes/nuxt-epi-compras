import { onMounted, ref } from 'vue'
import { allPortable } from '~/data/all-brands/portable/reviews'
import type { ReviewGrid } from "~/types/review-grid"

export function getAllPortable() {

  const allPortableReview = ref<ReviewGrid[]>([])

  const allPortableLoading = ref(false)
  const allPortableLoadingeError = ref(false)

  const filterByPrice = (filter: string) => {
    if(filter === 'price') {
      return allPortableReview.value.sort((a, b) => Number(a.price) - Number(b.price))
    } else if(filter === 'reviews') {
      return allPortableReview.value.sort((a, b) => Number(b.reviewCount) - Number(a.reviewCount))
    }
  }

  const fetchPosts = async () => {
    allPortableLoading.value = true
    try {
      allPortableReview.value = await allPortable
      allPortableLoading.value = false
      allPortableLoadingeError.value = false
    } catch (e) {
      allPortableLoadingeError.value = true
      allPortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    allPortableReview,
    allPortableLoading,
    allPortableLoadingeError,
    filterByPrice
  }
}
