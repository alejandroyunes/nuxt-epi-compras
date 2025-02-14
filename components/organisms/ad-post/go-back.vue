<script setup lang="ts">
import ArrowRightSvg from '~/components/icons/shared/ArrowRightSvg.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { goBack } = defineProps<{
  goBack: string
}>()

</script>

<template>
  <div class="go-back" @click="router.push(goBack)">
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
