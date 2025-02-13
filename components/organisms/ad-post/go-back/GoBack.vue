<script setup lang="ts">
import './go-back.scss'
import ArrowRightSvg from '@/components/icons/shared/ArrowRightSvg.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { goBack } = defineProps<{
  goBack?: () => void
}>()


</script>

<template>
  <section class="go-back-wrapper">
    <div class="go-back" @click="goBack ? goBack() : router.back()">
      <ArrowRightSvg class="icon" />
      <p>Volver</p>
    </div>
  </section>
</template>

