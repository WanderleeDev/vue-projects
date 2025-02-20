<template>
  <div class="w-full max-w-5xl mx-auto" v-bind="$attrs">
    <div class="grid justify-end">
      <slot name="default" />
    </div>
    <div class="relative pt-[56.25%]">
      <div ref="youtube" class="absolute top-0 left-0 w-full h-full shadow-lg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePlayer } from '@vue-youtube/core'
import { ref } from 'vue'

interface Props {
  idVideo: string
}

const { idVideo } = defineProps<Props>()
const youtube = ref()
usePlayer(idVideo, youtube, {
  playerVars: {
    autoplay: 1,
  },
})
</script>
