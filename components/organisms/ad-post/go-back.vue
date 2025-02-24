<script setup lang="ts">
import ArrowRightSvg from '~/components/icons/shared/ArrowRightSvg.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { goBackUrl, goBack } = defineProps<{
  goBackUrl?: string
  goBack?: () => void
}>()

const handleGoBack = () => {
  if (goBackUrl) {
    router.push(goBackUrl)
  } else if (goBack) {
    goBack()
  } else {
    router.back()
  }
}

</script>

<template>
  <div class="go-back" @click="handleGoBack">
    <div class="inner">
      <ArrowRightSvg class="icon" />
      <p>Volver</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.go-back {
  display: flex;
  max-width: var(--max-width);
  margin: 1rem auto 0;
  
  @media (max-width: 1290px) {
    padding: 0 .6rem;
  }

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }

  .inner {
    display: inline-flex;
    cursor: pointer;
    color: var(--heading);
    border-radius: 20px;
    padding: 6px 13px 6px 10px;
    border: 1px solid var(--border);

    .icon {
      margin-right: 6px;
      transform: rotate(180deg);
    }
  }

}
</style>
