<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ExitSvg from '~/components/icons/ExitSvg.vue'

const visible = ref(true)

const { type, message } = defineProps<{
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
}>()

onMounted(() => {
  showNotification()
})

const showNotification = () => {
  visible.value = true
}

const closeNotification = () => {
  visible.value = false
}

onMounted(() => {
  showNotification()
  setTimeout(() => {
    closeNotification()
  }, 5000)
})

</script>

<template>
  <div class="notification-container">
    <div class="notification-outer">
      <div :class="['notification', `notification--${type}`, { 'notification--visible': visible }]"
        @click="closeNotification">
        <div class="notification__icon">
          <slot name="icon">
            <span v-if="type === 'success'">✓</span>
            <span v-if="type === 'error'">✗</span>
            <span v-if="type === 'warning'">⚠</span>
            <span v-if="type === 'info'">ℹ</span>
          </slot>
        </div>
        <div class="notification__content">
          <span class="notification__message">
            {{ message }}
          </span>
        </div>
        <div class="notification__close" @click.stop="closeNotification" aria-label="Cerrar notificación">
          <ExitSvg />
        </div>
        <div class="notification__progress"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification-container {
  position: fixed;
  left: 50%;
  top: 8%;
  transform: translate(-50%, -50%);
  width: var(--max-width);
  z-index: 3;

  .notification-outer {
    position: relative;
    width: 100%;
    z-index: 3;

    .notification {
      position: absolute;
      top: 0;
      right: 0;
      min-width: 300px;
      max-width: 500px;
      padding: 1rem;
      border-radius: 0.375rem;
      box-shadow: 0 4px 6px var(--shadow);
      display: flex;
      align-items: center;
      gap: 1rem;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      animation: moveLeft 0.5s ease-in-out forwards;

      @keyframes moveLeft {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-1rem);
        }
      }

      &--visible {
        opacity: 1;
        z-index: 3;
      }

      &--success {
        background-color: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: #166534;
      }

      &--error {
        background-color: var(--background);
        border: 1px solid var(--border);
        color: #991b1b;
      }

      &--warning {
        background-color: var(--background);
        border: 1px solid var(--border);
        color: var(--heading);
      }

      &--info {
        background-color: #eff6ff;
        border: 1px solid #bfdbfe;
        color: #1e40af;
      }

      &__icon {
        font-size: 1.5rem;
        font-weight: bold;
      }

      &__content {
        flex: 1;
      }

      &__message {
        font-size: 1rem;
        margin: 0;
        font-weight: 600;
      }

      &__close {
        cursor: pointer;
        background-color: var(--background-opposite-soft);
        width: 28px;
        height: 28px;
        padding: 2px;
        border-radius: 50%;
        fill: var(--background);

        &:hover {
          opacity: 1;
        }
      }

      &__progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        background-color: var(--success);
        width: 100%;
        animation: shrink 5s linear 0.5s forwards;
      }

      @keyframes shrink {
        from {
          width: 100%;
        }

        to {
          width: 0%;
        }
      }
    }
  }

  @media (max-width: 1320px) {
    width: 100%;
  }

}
</style>
