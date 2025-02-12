import { onMounted, ref } from 'vue'
import { bestReviews } from "~/data/affortable/best/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getBest() {

  const bestReview = ref<ReviewGrid[]>([])

  const bestReviewLoading = ref(false)
  const bestReviewError = ref(false)

  const filterByPrice = (filter: string) => {
    if (filter === 'price') {
      return bestReview.value.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (filter === 'reviews') {
      return bestReview.value.sort((a, b) => Number(b.reviewCount) - Number(a.reviewCount))
    }
  }

  const fetchPosts = async () => {
    bestReviewLoading.value = true
    try {
      bestReview.value = await bestReviews

      bestReviewLoading.value = false
      bestReviewError.value = false
    } catch (e) {
      bestReviewError.value = true
      bestReviewLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestReview,
    bestReviewLoading,
    bestReviewError,
    filterByPrice
  }
}
