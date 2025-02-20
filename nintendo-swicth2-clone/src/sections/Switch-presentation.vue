<template>
  <div class="fixed inset-0 min-h-dvh bg-main grid font-quicksand z-50">
    <div
      v-if="!isViewVideo"
      class="flex flex-col gap-20 justify-center items-center row-[1/2] col-[1/2]"
    >
      <NintendoLogo />
      <div class="flex flex-col gap-8 justify-center items-center">
        <p>An update from Nintendo.</p>
        <ButtonBase @click="isViewVideo = true">
          Watch trailer
          <PlaySvg />
        </ButtonBase>
      </div>
    </div>

    <VideoPresentation v-show="isViewVideo" class="row-[1/2] col-[1/2]">
      <template v-slot:footer>
        <button
          aria-label="Skip video"
          class="rounded-4xl fixed bottom-8 left-[50%] translate-x-[-50%] transition-opacity delay-100 duration-[2s] cursor-pointer"
          type="button"
          @click="eventEmitter"
        >
          <SkipSvg aria-hidden="true" class="hover:brightness-125 transition-all" />
        </button>
      </template>
    </VideoPresentation>
  </div>
</template>

<script lang="ts" setup>
import NintendoLogo from '@/icons/Nintendo-logo.vue'
import ButtonBase from '@/components/Button-base.vue'
import PlaySvg from '@/icons/Play-svg.vue'
import VideoPresentation from '@/components/Video-presentation.vue'
import SkipSvg from '@/icons/Skip-svg.vue'
import { ref } from 'vue'

const isViewVideo = ref(false)
const emit = defineEmits(['changeVisibility'])

function eventEmitter(): void {
  emit('changeVisibility', isViewVideo.value)
}
</script>

<style scoped>
.v-leave-to {
  transition:
    opacity 0.7s ease-in-out,
    transform 0.5s ease-in-out;
  opacity: 0;
  transform: scale(2);
}
</style>
