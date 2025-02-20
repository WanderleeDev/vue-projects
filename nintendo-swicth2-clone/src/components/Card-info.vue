<template>
  <div
    class="flex flex-col w-[86.67vw] gap-9 bg-white p-[8.5vw_7vw] md:p-[4vw_2vw] lg:p-[3.5vw_2vw]"
    v-bind="$attrs"
  >
    <slot name="header" />
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>

<script lang="ts" setup></script>
<!-- p-[8.5vw_7vw] lg:p-[4.5vw_3.5vw] -->
