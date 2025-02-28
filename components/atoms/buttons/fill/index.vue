<script setup lang="ts">

type ButtonProps = {
  text: string
  link?: string
  externalLink?: string
  onClick?: () => void
  disabled?: boolean
}

const router = useRouter()

const { text, link, externalLink, onClick, disabled } = defineProps<ButtonProps>()

const handleClick = () => {
  if (link && !disabled) {
    router.push(link)
  }

  if (externalLink && !disabled) {
    window.open(externalLink, '_blank')
  }

  if (onClick && !disabled) {
    onClick()
  }
}
</script>

<template>
  <button class="fill-btn" :class="{ 'btn-disabled': disabled }" type="button" @click="handleClick">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.fill-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  color: var(--white);
  margin-top: 32px;
  padding: 1rem;
  border-radius: 48px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  font-size: 1rem;

  &.btn-disabled {
    opacity: 0.7;
  }
}
</style>