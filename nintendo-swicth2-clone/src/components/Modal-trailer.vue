<template>
  <ModalBase>
    <VideoPlayer id-video="ir4Fp-JerEU">
      <button @click="closeModal()" type="button" aria-label="close modal">
        <CloseSvg />
      </button>
    </VideoPlayer>
  </ModalBase>
</template>

<script lang="ts" setup>
import ModalBase from './Modal-base.vue'
import VideoPlayer from '@/components/Youtube-player.vue'
import CloseSvg from '@/icons/Close-svg.vue'
import { onBeforeMount, onUnmounted } from 'vue'

const emit = defineEmits(['closeModal'])
const closeModal = () => emit('closeModal', false)

onBeforeMount(() => {
  document.body.classList.add('overflow-hidden')
})

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
