<template>
  <section class="h-[195.07vw] md:h-[70.74vw] lg:h-[54.10vw] relative">
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
          <ArrowSvg class="size-4 lg:w-[.96vw]" />
        </ButtonBase>
      </template>
    </CardInfo>

    <SwipperCarousel />
  </section>
</template>

<script lang="ts" setup>
import SwipperCarousel from '@/components/Swipper-carousel.vue'
import ButtonBase from '@/components/Button-base.vue'
import CardInfo from '@/components/Card-info.vue'
import ArrowSvg from '@/icons/Arrow-svg.vue'

const navigateTo = (): void => {
  window.location.href = 'https://www.nintendo.com/us/nintendo-switch-2-experience/'
}
</script>

<style></style>
