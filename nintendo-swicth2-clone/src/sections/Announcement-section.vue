<template>
  <section class="h-[146vw] md:h-[59.15vw] lg:h-[45.39vw] overflow-clip relative">
    <h2 class="sr-only">Nintendo Direct Announcement</h2>
    <CommonVideo :video="currentVideo" class="h-full w-full" />
    <CardInfo
      class="absolute z-10 top-[7vw] left-[50%] translate-x-[-50%] md:w-[42.7vw] md:right-[4.8vw] md:left-[initial] md:translate-x-0 md:top-[50%] md:translate-y-[-50%] lg:w-[31.40vw]"
    >
      <template v-slot:header>
        <img
          class="w-full md:w-[32vw] lg:w-[24.9vw] mx-auto"
          src="https://www.nintendo.com/successor/assets/img/en-us/l-direct-logo.svg"
          alt="Nintendo Direct: Nintendo Switch 2 - 02.04.2025"
          loading="lazy"
        />
      </template>
      <template v-slot:body>
        <div
          class="flex flex-col gap-2 justify-center items-center text-center text-[#505050] text-[3.9vw] md:text-[1.83vw] lg:text-[1.25vw]"
        >
          <p>Stay tuned for a closer look</p>
          <p>in a Nintendo Direct presentation</p>
          <p>on April 2nd, 2025.</p>
        </div>
      </template>

      <template v-slot:footer>
        <ButtonBase
          class="text-red-500 scale-[.85] w-[70.67vw] h-[14.67vw] md:w-[30.17vw] lg:w-[20vw] lg:h-[5vw] md:h-[6.45vw] text-[3.4vw] mx-auto"
          @click="navigateTo"
        >
          Find out more
          <ArrowSvg class="size-4 lg:w-[.96vw]" />
        </ButtonBase>
      </template>
    </CardInfo>
  </section>
</template>

<script lang="ts" setup>
import CommonVideo from '@/components/Common-video.vue'
import ArrowSvg from '@/icons/Arrow-svg.vue'
import ButtonBase from '@/components/Button-base.vue'
import CardInfo from '@/components/Card-info.vue'
import { useWindowSize } from '@/composables/useWindowSize'
import { computed } from 'vue'

const { width } = useWindowSize()

const currentVideo = computed(() =>
  width.value >= 768
    ? 'https://www.nintendo.com/successor/assets/img/l-direct-bg-movie.mp4'
    : 'https://www.nintendo.com/successor/assets/img/l-direct-bg-movie_sp.mp4',
)

const navigateTo = (): void => {
  window.location.href = 'https://www.nintendo.com/successor/en-us/nintendo-direct/index.html'
}
</script>
