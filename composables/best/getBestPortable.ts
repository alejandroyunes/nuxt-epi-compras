import { onMounted, ref } from 'vue'
import { bestPortable } from "~/data/best/portable/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getBestPortable() {

  const bestPortableReview = ref<ReviewGrid[]>([])

  const bestPortableLoading = ref(false)
  const bestPortableError = ref(false)

  const filterByPrice = (filter: string) => {
    if (filter === 'price') {
      return bestPortableReview.value.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (filter === 'reviews') {
      return bestPortableReview.value.sort((a, b) => Number(b.reviewCount) - Number(a.reviewCount))
    }
  }

  const fetchPosts = async () => {
    bestPortableLoading.value = true
    try {
      bestPortableReview.value = await bestPortable

      bestPortableLoading.value = false
      bestPortableError.value = false
    } catch (e) {
      bestPortableError.value = true
      bestPortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestPortableReview,
    bestPortableLoading,
    bestPortableError,
    filterByPrice
  }
}