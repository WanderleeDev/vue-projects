<template>
  <section class="h-[146vw] md:h-[59.15vw] lg:h-[45.39vw] overflow-clip relative">
    <h2 class="sr-only">Nintendo Direct Announcement</h2>
    <CommonVideo :video="videoUrl" class="h-full w-full" />
    <!-- absolute z-50 right-[5.86vw] -->
    <CardInfo
      class="absolute z-10 top-[7vw] left-[50%] translate-x-[-50%] md:w-[42.7vw] md:right-[4.8vw] md:left-[initial] md:translate-x-0 md:top-[50%] md:translate-y-[-50%] lg:w-[31.40vw]"
    >
      <template v-slot:header>
        <img
          class="w-full lg:w-[24.9vw] mx-auto"
          src="https://www.nintendo.com/successor/assets/img/en-us/l-direct-logo.svg"
          alt="Nintendo Direct: Nintendo Switch 2 - 02.04.2025"
          loading="lazy"
        />
      </template>
      <template v-slot:body>
        <div
          class="flex flex-col gap-2 justify-center items-center text-[#505050] text-[4vw] lg:text-[1.25vw]"
        >
          <p>Stay tuned for a closer look</p>
          <p>in a Nintendo Direct presentation</p>
          <p>on April 2nd, 2025.</p>
        </div>
      </template>

      <template v-slot:footer>
        <ButtonBase class="text-red-500 scale-[.85]" @click="navigateTo">
          Find out more
          <ArrowSvg class="size-4" />
        </ButtonBase>
      </template>
    </CardInfo>
    <!--
    <CardInfo
      class="absolute z-10 top-[7vw] left-[50%] translate-x-[-50%] md:w-[42.7vw] md:left-[4.8vw] md:translate-x-0 md:top-[50%] md:translate-y-[-50%] lg:w-[31.40vw]"
    >
      <template v-slot:header>
        <img
          class="w-[28.14vw] md:w-[12.87vw] lg:w-[9.74vw] mx-auto"
          src="https://www.nintendo.com/successor/assets/img/en-us/l-live-logo.svg"
          alt="Nintendo Switch 2 Experience"
          loading="lazy"
        />
        <img
          class="w-[58.54vw] md:w-[26.77vw] lg:w-[21vw] mx-auto"
          src="https://www.nintendo.com/successor/assets/img/en-us/l-live-date.svg"
          alt="New York: 4/4-4/6 Los Angeles: 4/11-4/13 Dallas: 4/25-4/27"
          loading="lazy"
        />
      </template>
      <template v-slot:body>
        <div
          class="flex flex-col gap-2 justify-center items-center text-center text-[#505050] text-[3.9vw] md:text-[1.83vw] lg:text-[1.25vw]"
        >
          <p class="lg:font-normal">
            Experience Nintendo Switch 2 for yourself at a hands-on event.
          </p>
          <p class="text-[2.4vw] md:text-xs lg:pt-[0.3vw]">
            A free Nintendo Account is required to register.
          </p>
        </div>
      </template>

      <template v-slot:footer>
        <ButtonBase
          class="text-red-500 scale-[.85] w-[70.67vw] h-[14.67vw] md:w-[30.17vw] lg:w-[20vw] lg:h-[5vw] md:h-[6.45vw] text-[3.4vw] mx-auto"
          @click="navigateTo"
        >
          Learn More
          <ArrowSvg class="size-4" />
        </ButtonBase>
      </template>
    </CardInfo> -->
  </section>
</template>

<script lang="ts" setup>
import CommonVideo from '@/components/Common-video.vue'
import ArrowSvg from '@/icons/Arrow-svg.vue'
import ButtonBase from '@/components/Button-base.vue'
import CardInfo from '@/components/Card-info.vue'

const videoUrl = 'https://www.nintendo.com/successor/assets/img/l-direct-bg-movie.mp4'
const navigateTo = (): void => {
  window.location.href = 'https://www.nintendo.com/successor/en-us/nintendo-direct/index.html'
}
</script>
<!-- https://www.nintendo.com/successor/assets/img/l-direct-bg-movie_sp.mp4 -->
