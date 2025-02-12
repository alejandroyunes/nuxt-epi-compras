import { onMounted, ref } from 'vue'
import { bestCounter } from '~/data/affortable/counter/reviews'
import type { ReviewGrid } from "~/types/review-grid"

export function getBestCounter() {

  const bestCounterAffortableReview = ref<ReviewGrid[]>([])

  const bestCounterAffortableLoading = ref(false)
  const bestCounterAffortableLoadingeError = ref(false)

  const filterByPrice = (filter: string) => {
    if (filter === 'price') {
      return bestCounterAffortableReview.value.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (filter === 'reviews') {
      return bestCounterAffortableReview.value.sort((a, b) => Number(b.reviewCount) - Number(a.reviewCount))
    }
  }

  const fetchPosts = async () => {
    bestCounterAffortableLoading.value = true
    try {
      bestCounterAffortableReview.value = await bestCounter

      bestCounterAffortableLoading.value = false
      bestCounterAffortableLoadingeError.value = false
    } catch (e) {
      bestCounterAffortableLoadingeError.value = true
      bestCounterAffortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestCounterAffortableReview,
    bestCounterAffortableLoading,
    bestCounterAffortableLoadingeError,
    filterByPrice
  }
}
