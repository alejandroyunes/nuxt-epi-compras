import { onMounted, ref } from 'vue'
import { allCounter } from '~/data/all-brands/counter/reviews'
import type { ReviewGrid } from "~/types/review-grid"

export function getAllCounter() {

  const allCounterReview = ref<ReviewGrid[]>([])

  const allCounterLoading = ref(false)
  const allCounterLoadingeError = ref(false)

  const filterByPrice = (filter: string) => {
    if(filter === 'price') {
      return allCounterReview.value.sort((a, b) => Number(a.price) - Number(b.price))
    } else if(filter === 'reviews') {
      return allCounterReview.value.sort((a, b) => Number(b.reviewCount) - Number(a.reviewCount))
    }
  }

  const fetchPosts = async () => {
    allCounterLoading.value = true
    try {
      allCounterReview.value = await allCounter

      allCounterLoading.value = false
      allCounterLoadingeError.value = false
    } catch (e) {
      allCounterLoadingeError.value = true
      allCounterLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    allCounterReview,
    allCounterLoading,
    allCounterLoadingeError,
    filterByPrice
  }
}
