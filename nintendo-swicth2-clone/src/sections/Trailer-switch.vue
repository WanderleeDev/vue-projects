<template>
  <section
    class="min-h-[48vw] py-[1vw] gap-[3vw] lg:gap-[1vw] flex flex-col justify-center items-center"
  >
    <h2 class="sr-only">Trailer</h2>
    <img
      class="w-[43.87vw] md:w-[26.36vw] m-[5vw_auto]"
      src="https://www.nintendo.com/successor/assets/img/l-trailer-logo.svg"
      alt="Nintendo Switch 2 "
      loading="lazy"
    />
    <ButtonBase
      class="w-[70.67vw] h-[14.67vw] md:w-[30.17vw] md:h-[6.45vw]"
      @click="handleShowModal"
    >
      <span class="relative z-50"> First-look trailer </span>
      <PlaySvg />
    </ButtonBase>
  </section>

  <Teleport to="#modal">
    <Transition>
      <ModalTrailer v-if="isOpenModal" @close-modal="handleShowModal" />
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, Teleport, Transition } from 'vue'
import ButtonBase from '@/components/Button-base.vue'
import PlaySvg from '@/icons/Play-svg.vue'
import ModalTrailer from '@/components/Modal-trailer.vue'

const isOpenModal = ref(false)
const handleShowModal = (value: boolean = true) => (isOpenModal.value = value)
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
