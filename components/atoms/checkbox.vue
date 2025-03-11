<script setup lang="ts">

defineProps<{
  modelValue: boolean
  label: string
}>()

const emit = defineEmits(["update:modelValue"])

function handleChange(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).checked)
}

</script>

<template>
  <div class="checkbox-container">
    <label>
      <input type="checkbox" :checked="modelValue" @change="handleChange" />
      <span class="checkmark"></span>
      <span class="label">{{ label }}</span>
    </label>
  </div>
</template>



<style lang="scss" scoped>
.checkbox-container {
  display: flex;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    input[type="checkbox"] {
      opacity: 0;
      position: absolute;
      cursor: pointer;

      &:checked~.checkmark {
        background-color: var(--primary);
        border-color: var(--primary-soft);

        &:after {
          display: block;
        }
      }
    }

    .checkmark {
      position: absolute;
      left: 0;
      height: 22px;
      width: 22px;
      background-color: var(--white);
      border: 2px solid var(--border);
      border-radius: 4px;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 7px;
        height: 11px;
        border: solid var(--white);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    .label {
      margin-left: 28px;
      font-size: 1.125rem;
      padding: 0;
      color: var(--heading);
    }
  }
}
</style>