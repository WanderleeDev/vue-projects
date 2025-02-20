<script setup lang="ts">
import '@fontsource-variable/noto-sans-jp'
import '@fontsource-variable/quicksand'
import { onBeforeMount, ref, Transition, defineAsyncComponent } from 'vue'
import ModalIntro from './sections/Switch-presentation.vue'
import { useLocalStorage } from './composables/useLocalStorage'
import { register } from 'swiper/element/bundle'

register()

const { getData, setData } = useLocalStorage()
const MODAL_KEY = 'isViewPresentation'
const hasViewVideo = ref(false)
const AsyncMainComponent = defineAsyncComponent(() => import('./sections/Main-section.vue'))

function changeViewPresentation(value: boolean) {
  if (hasViewVideo.value) return

  hasViewVideo.value = value
  setData(MODAL_KEY, value)
}

onBeforeMount(() => {
  hasViewVideo.value = !!getData(MODAL_KEY)
})
</script>

<template>
  <Transition>
    <ModalIntro v-if="!hasViewVideo" @change-visibility="changeViewPresentation" />
  </Transition>

  <Suspense>
    <AsyncMainComponent v-if="hasViewVideo" />
  </Suspense>
</template>
