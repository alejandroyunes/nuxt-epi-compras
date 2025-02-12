<script setup lang="ts">
interface Food {
  name: string;
  description: string;
}

defineProps<{
  foods: Food[];
}>();
</script>

<template>
  <div class="food-list">
    <div v-for="(food, index) in foods" :key="index" class="food-item">
      <h3>{{ food.name }}</h3>
      <p>{{ food.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.food-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  .food-item {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h3 {
      color: var(--heading);
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
      border-bottom: 2px solid var(--primary);
      padding-bottom: 0.5rem;
    }

    p {
      color: var(--text);
      margin: 0;
      font-size: 1.125rem;
    }
  }
}
</style>