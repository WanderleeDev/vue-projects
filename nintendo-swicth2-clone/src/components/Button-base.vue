<template>
  <button
    class="relative flex gap-4 items-center justify-center font-clamp overflow-hidden bg-transparent text-current duration-400 hover:text-main before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:duration-400 before:z-[-1] hover:before:left-0 border-2 transition-[cubic-bezier(.19,1,.22,1] cursor-pointer z-0 border-current"
    v-bind="$attrs"
    type="button"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style>
.font-clamp {
  font-size: clamp(1rem, 1.5vw, 2.5vw);
  padding: 1.3vw 2vw;
}
</style>
