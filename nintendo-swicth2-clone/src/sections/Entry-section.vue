<template>
  <section class="grid overflow-hidden">
    <h2 class="col-[1/2] row-[1/2] z-10">
      <span class="sr-only">Nintendo switch 2</span>
      <picture class="relative right-0 top-0 h-full w-full fade">
        <source v-for="{ media, srcset } in logoSources" :key="srcset" :media :srcset />
        <img class="w-full" :src="logoSources[0].srcset" alt="Nintendo Switch 2 logo" />
      </picture>
    </h2>
    <div class="col-[1/2] row-[1/2]">
      <picture class="relative left-0 top-0 h-full w-full fadeInLeft">
        <source
          v-for="{ height, media, srcset, width } in consoleSources"
          :key="srcset"
          :media
          :srcset
          :width
          :height
        />
        <img
          class="w-full"
          :src="consoleSources[0].srcset"
          alt="Nintendo Switch 2"
          :width="consoleSources[0].width"
          :height="consoleSources[0].height"
        />
      </picture>
    </div>
    <div
      class="flex flex-wrap flex-col justify-center gap-8 lg:gap-x-[4vw] items-center col-[1/2] row-[2/3] pb-16 pt-8 md:flex-row fade"
      :style="{
        '--delay': '0.7s',
        '--duration': '0.5s',
      }"
    >
      <img
        class="w-[62.94vw] sm:w-80 lg:w-[26.29vw]"
        src="https://www.nintendo.com/successor/assets/img/en-au/l-kv-bottom-text.svg"
        alt="Available 2025"
        width="301"
        height="33"
      />
      <ButtonBase @click="handleShowModal">
        <PlaySvg />
        <span class="relative z-50"> First-look trailer </span>
      </ButtonBase>
    </div>
  </section>

  <Teleport to="#modal">
    <Transition>
      <ModalTrailer v-if="isOpenModal" @close-modal="handleShowModal" />
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import ButtonBase from '@/components/Button-base.vue'
import PlaySvg from '@/icons/Play-svg.vue'
import { ref, Teleport } from 'vue'
import ModalTrailer from '@/components/Modal-trailer.vue'

const isOpenModal = ref(false)
const logoSources = [
  {
    srcset: 'https://www.nintendo.com/successor/assets/img/l-kv-logo.svg',
    media: '(min-width: 1025px)',
  },
  {
    srcset: 'https://www.nintendo.com/successor/assets/img/l-kv-logo-tab.svg',
    media: '(min-width: 760px) and (max-width: 1024.98px)',
  },
  {
    srcset: 'https://www.nintendo.com/successor/assets/img/l-kv-logo-sp.svg',
    media: '(max-width: 759.98px)',
  },
]
const consoleSources = [
  {
    srcset: 'https://www.nintendo.com/successor/assets/img/l-kv-pic.webp',
    width: 2732,
    height: 1400,
    media: '(min-width: 1025px)',
  },
  {
    srcset: 'https://www.nintendo.com/successor/assets/img/l-kv-pic-tab.webp',
    width: 1640,
    height: 820,
    media: '(min-width: 760px) and (max-width: 1024.98px)',
  },
  {
    srcset: 'https://www.nintendo.com/successor/assets/img/l-kv-pic-sp.webp',
    width: 750,
    height: 860,
    media: '(max-width: 759.98px)',
  },
]
const handleShowModal = (value: boolean = true) => (isOpenModal.value = value)
</script>

<style scoped>
.fadeInLeft {
  transition:
    opacity 0.7s ease-in-out,
    left 0.4s linear;
  @starting-style {
    opacity: 0;
    left: 5%;
  }
}

.fade {
  --duration: 0.7s;
  --delay: 0.4s;

  transition: var(--duration) opacity var(--delay) linear;
  @starting-style {
    opacity: 0;
    left: 10%;
  }
}
</style>
