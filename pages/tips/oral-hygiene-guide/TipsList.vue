<script setup lang="ts">
interface Tip {
  title: string;
  content: string;
}

defineProps<{
  tips: Tip[];
}>();
</script>

<template>
  <div class="tips-list">
    <div v-for="(tip, index) in tips" :key="index" class="tip-item">
      <h3>{{ tip.title }}</h3>
      <p>{{ tip.content }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tips-list {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;

  .tip-item {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--primary);

    h3 {
      color: var(--heading);
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    p {
      color: var(--text);
      margin: 0;
      font-size: 1.125rem;
    }

    &:hover {
      transform: translateY(-2px);
      transition: transform 0.2s ease;
    }
  }
}
</style>