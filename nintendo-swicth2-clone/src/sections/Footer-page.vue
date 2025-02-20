<template>
  <footer>
    <div class="flex flex-col gap-3 py-8 relative">
      <div
        class="flex justify-center items-center font-normal gap-y-3 gap-x-6 md:gap-6 text-[2.4vw] md:text-[1.1vw] flex-wrap lg:text-xs"
      >
        <a
          v-for="{ href, text } in links"
          :key="text"
          :href
          target="_blank"
          class="flex items-center gap-1.5 w-max relative after:absolute after:h-[1px] after:bg-white after:bottom-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
        >
          <ArrowSvg class="w-[2.5vw] md:size-3" />
          {{ text }}
        </a>
      </div>
      <img
        class="mx-auto"
        src="https://www.nintendo.com/successor/assets/img/copy.svg"
        alt="© Nintendo"
        loading="lazy"
      />
      <img
        class="w-[30vw] mx-auto md:h-16 md:absolute md:left-5 md:bottom-5 md:w-[initial]"
        src="https://www.nintendo.com/successor/assets/img/en_esrb-e-t.svg"
        alt="everyone to teen"
        loading="lazy"
      />
    </div>
    <hr />
    <img
      class="w-32 mx-auto py-3"
      src="https://www.nintendo.com/successor/assets/img/nintendo-logo.png"
      alt="Nintendo"
      loading="lazy"
    />
  </footer>
</template>

<script lang="ts" setup>
import ArrowSvg from '@/icons/Arrow-svg.vue'

const links = [
  {
    text: 'Nintendo.com',
    href: 'https://www.nintendo.com/us/',
  },
  {
    text: 'Privacy policy',
    href: 'https://www.nintendo.com/region-selector/privacy-policy/',
  },
  {
    text: 'Change region',
    href: 'https://www.nintendo.com/successor/region-selector/index.html',
  },
  {
    text: 'Set cookie preferences',
    href: 'https://www.nintendo.com/successor/region-selector/index.html',
  },
]
</script>
