<script setup lang="ts">

const { text, position = 'center' } = defineProps<{ 
  text?: string, 
  position?: 'left' | 'center' | 'right'; }>()

  const closeTooltip = ref(false)

  setTimeout(() => {
    closeTooltip.value = true
  }, 5000)

</script>

<template>
  <div v-if="!closeTooltip" class="tooltip" :class=[position]>
    <span v-if="text">{{ text }}</span>
  </div>
</template>


<style lang="scss" scoped>

.tooltip {
  position: absolute;
  z-index: 1;
  background-color: var(--background-opposite-soft);
  top: 180%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  padding: .6rem;
  border: 1px solid var(--background-opposite-soft);

  &.right {
    left: 0%;
  }

  &.left {
    left: 100%;
  }

  &.center {
    left: 50%;
  }

  span {
    color: var(--background);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--background-opposite-soft) transparent transparent transparent;
    transform: rotate(180deg);
  }

  &.left::after {
    left: 15%;
    margin-left: 0;
  }

  &.center::after {
    left: 50%;
    margin-left: -5px;
  }

  &.right::after {
    left: 70%;
    margin-left: 0;
  }
}

</style>