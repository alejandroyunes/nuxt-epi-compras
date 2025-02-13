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

<style lang="scss" scoped>
.go-back-wrapper {
  margin-top: 16px;
  display: flex;

  .go-back {
    display: flex;
    width: auto;
    align-items: center;
    cursor: pointer;
    color: var(--color-heading);
    border-radius: 20px;
    padding: 6px 13px 6px 10px;
    border: 1px solid var(--color-border-hover);

    .icon {
      margin-right: 6px;
      transform: rotate(180deg);
    }
  }

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
}
</style>
