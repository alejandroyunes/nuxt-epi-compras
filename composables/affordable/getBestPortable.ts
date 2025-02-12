import { onMounted, ref } from 'vue'
import { bestPortable } from "~/data/affortable/portable/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getBestPortable() {

  const bestPortableAffortableReview = ref<ReviewGrid[]>([])

  const bestPortableAffortableLoading = ref(false)
  const bestPortableAffortableError = ref(false)

  const filterByPrice = (filter: string) => {
    if (filter === 'price') {
      return bestPortableAffortableReview.value.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (filter === 'reviews') {
      return bestPortableAffortableReview.value.sort((a, b) => Number(b.reviewCount) - Number(a.reviewCount))
    }
  }

  const fetchPosts = async () => {
    bestPortableAffortableLoading.value = true
    try {
      bestPortableAffortableReview.value = await bestPortable

      bestPortableAffortableLoading.value = false
      bestPortableAffortableError.value = false
    } catch (e) {
      bestPortableAffortableError.value = true
      bestPortableAffortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestPortableAffortableReview,
    bestPortableAffortableLoading,
    bestPortableAffortableError,
    filterByPrice
  }
}