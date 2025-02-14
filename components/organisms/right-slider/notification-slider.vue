<script setup lang="ts">
import './scss/styles.scss'
import './scss/notification.scss'
import { ref } from 'vue'
import NotificationBellSvg from '@/components/icons/shared/NotificationBellSvg.vue'
import NoNotificationBellSvg from '@/components//icons/shared/NoNotificationBellSvg.vue'
import ExitSvg from './icons/ExitSvg.vue'

const showNotification = ref(false)
const notifications = ref(false)

const toggleSlider = () => {
  showNotification.value = !showNotification.value
}

const toggleNotification = () => {
  notifications.value = !notifications.value
}

</script>

<template>
  <div @click="toggleSlider" class="notification-outer">

    <div v-if="!notifications" class="notification-bullet">
      <NotificationBellSvg @click="toggleNotification" class="icon" />
    </div>

    <NoNotificationBellSvg @click="toggleNotification" v-if="notifications" class="icon" />

  </div>

  <div class="slider-outer" :class="{ 'open': showNotification }">
    <div class="slider-inner">

      <div class="notification-bell">
        <!-- <NotificationBellSvg /> -->
        <NoNotificationBellSvg />
      </div>
      <div class="notifications">
        <p>No hay notificaciones</p>
      </div>
    </div>

    <div class="slider-exit" @click="toggleSlider">
      <ExitSvg class="icon" />
    </div>
  </div>

  <div @click="toggleSlider" :class="{ 'slider-bg': showNotification }"></div>
</template>