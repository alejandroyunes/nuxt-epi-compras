<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ExitSvg from '~/components/icons/ExitSvg.vue'

export type NotificationType = {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

const visible = ref(true)

const { type, message } = defineProps<NotificationType>()

const closeNotification = () => {
  visible.value = false
}

onMounted(() => {
  setTimeout(() => {
    closeNotification()
  }, 5000)
})

</script>

<template>
  <div class="side-notification">
    <div class="side-notification-outer">
      <div :class="['notification', `notification--${type}`, { 'notification--visible': visible }]"
        @click="closeNotification">
        <div class="notification__icon">
          <slot name="icon">
            <span v-if="type === 'success'">✓</span>
            <span v-if="type === 'error'">⚠</span>
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
        <div :class="['notification__progress', `notification__progress--${type}`]"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-notification {
  position: fixed;
  left: 50%;
  top: 8%;
  transform: translate(-50%, -50%);
  width: var(--max-width);
  z-index: 3;

  .side-notification-outer {
    position: relative;
    width: 100%;
    z-index: 3;

    .notification {
      position: absolute;
      top: 0;
      right: 0;
      max-width: 500px;
      padding: .4rem .5rem;
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
          transform: translateX(-1.6rem);
        }
      }


      &--visible {
        opacity: 1;
        z-index: 3;
      }

      &--success {
        background-color: var(--background);
        border: 1px solid var(--border);
        color: var(--heading);
      }

      &--error {
        background-color: var(--background);
        border: 1px solid var(--border);
        color: var(--heading);
      }

      &--warning {
        background-color: var(--background);
        border: 1px solid var(--border);
        color: var(--heading);
      }

      &--info {
        background-color: var(--background);
        border: 1px solid var(--border);
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
        width: 24px;
        height: 24px;
        padding: 4px;
        line-height: 24px;
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
        width: 100%;
        animation: shrink 5s linear 0.5s forwards;
      }

      &__progress--success {
        background-color: var(--success);
      }

      &__progress--error {
        background-color: var(--danger);
      }

      &__progress--warning {
        background-color: var(--warning);
      }

      &__progress--info {
        background-color: var(--primary);
      }

      @keyframes shrink {
        from {
          width: 100%;
        }

        to {
          width: 0%;
        }
      }

      @media (max-width: 768px) {
        max-width: 400px;
      }

    }
  }

  @media (max-width: 1320px) {
    width: 100%;
  }

}
</style>
