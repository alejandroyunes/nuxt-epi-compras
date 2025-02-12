<script setup>
import { ref } from 'vue'

const { filterByPrice } = defineProps(['filterByPrice'])

const selectedFilters = ref([])
const filters = ['reviews', 'price',]

const toggleFilter = (filter) => {
  const oppositeFilter = filter === 'price' ? 'reviews' : 'price';

  filterByPrice(filter)
  selectedFilters.value = selectedFilters.value.filter((f) => f !== oppositeFilter)

  if (!selectedFilters.value.includes(filter)) {
    selectedFilters.value.push(filter)
  }
}

</script>

<template>
  <div class="user-list-container">
    <h2 class="title">
       Filter by
    </h2>
    <div class="filters">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="toggleFilter(filter)"
        :class="['filter-button', { active: selectedFilters.includes(filter) }]"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-list-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.3rem 1rem;
}

.title {
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  border-radius: 2rem;
  padding: .3rem 1rem;
  color: var(--white);
}

.filters {
  display: flex;
  gap: 0.5rem;
}

.filter-button {
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: var(--background-soft);
  color: var(--primary);
  transition: all 0.2s;
  cursor: pointer;
  border: none;

  &.active {
    background-color: var(--primary);
    color: var(--heading);
  }
  &:hover {
    background-color: var(--primary);
    color: var(--heading);
  }
}

</style>
