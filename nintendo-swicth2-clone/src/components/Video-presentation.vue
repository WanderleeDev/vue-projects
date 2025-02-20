<template>
  <div class="flex justify-center items-center" v-bind="$attrs">
    <div class="fixed inset-0 w-full h-full bg-black"></div>
    <slot name="header" />
    <div
      class="bg-main z-10 w-full max-w-4xl mx-auto reveal-animation will-change-transform"
      v-on:animationend="isEndAnimation = true"
    >
      <VideoPlayer
        id-video="ir4Fp-JerEU"
        class="transition-opacity bg-main duration-700"
        :class="isEndAnimation ? 'opacity-100' : 'opacity-0'"
      />
    </div>
    <div :class="isEndAnimation ? 'opacity-100' : 'opacity-0'">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VideoPlayer from './Youtube-player.vue'
import { ref } from 'vue'

const isEndAnimation = ref(false)
</script>

<style>
.reveal-animation {
  animation: reveal 0.6s ease-out forwards;
}

@keyframes reveal {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
