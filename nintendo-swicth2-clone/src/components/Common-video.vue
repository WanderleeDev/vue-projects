<template>
  <div class="w-full relative overflow-hidden" v-bind="$attrs">
    <button
      class="absolute left-5 bottom-5 z-50 cursor-pointer rounded-full"
      aria-hidden="true"
      aria-label="Pausar"
      @click="togglePlay"
    >
      <PauseSvg v-if="!isPlaying" />
      <PlaySvg v-if="isPlaying" />
    </button>

    <video
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full scale-x-105 h-full object-cover"
      ref="videoPlayer"
      loop
      muted
      playsinline
      autoplay
      :src="video"
    ></video>
  </div>
</template>

<script lang="ts" setup>
import PauseSvg from '@/icons/Pause-svg.vue'
import PlaySvg from '@/icons/Play-svg.vue'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const { video } = defineProps<{ video: string }>()

const videoPlayer = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(!videoPlayer.value?.paused)
const isActiveDocument = ref(true)

const changeActiveDocument = (): void => {
  isActiveDocument.value = !document.hidden
}
const togglePlay = (): void => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    videoPlayer.value?.play()
  } else {
    videoPlayer.value?.pause()
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', changeActiveDocument)
  changeActiveDocument()
})

watch(isActiveDocument, (newVal) => {
  if (!videoPlayer.value) return

  if (newVal) return videoPlayer.value.play()

  videoPlayer.value?.pause()
})

onBeforeUnmount(() => document.removeEventListener('visibilitychange', changeActiveDocument))
</script>
