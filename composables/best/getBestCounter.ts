import { onMounted, ref } from 'vue'
import { bestCounter } from '~/data/best/counter/reviews'
import type { ReviewGrid } from "~/types/review-grid"

export function getBestCounter() {

  const bestCounterReview = ref<ReviewGrid[]>([])

  const bestCounterLoading = ref(false)
  const bestCounterLoadingeError = ref(false)

  const filterByPrice = (filter: string) => {
    if(filter === 'price') {
      return bestCounterReview.value.sort((a, b) => Number(a.price) - Number(b.price))
    } else if(filter === 'reviews') {
      return bestCounterReview.value.sort((a, b) => Number(b.reviewCount) - Number(a.reviewCount))
    }
  }

  const fetchPosts = async () => {
    bestCounterLoading.value = true
    try {
      bestCounterReview.value = await bestCounter

      bestCounterLoading.value = false
      bestCounterLoadingeError.value = false
    } catch (e) {
      bestCounterLoadingeError.value = true
      bestCounterLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestCounterReview,
    bestCounterLoading,
    bestCounterLoadingeError,
    filterByPrice
  }
}
