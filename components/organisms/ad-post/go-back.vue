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
    <ArrowRightSvg class="icon" />
    <p>Volver</p>
  </div>
</template>

<style lang="scss" scoped>
.go-back {
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

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
}
</style>
