<template>
  <article
    class="relative card-size w-full rounded-xl overflow-hidden p-[5%] flex flex-col justify-center mx-auto transition-all duration-300 hover-card shadow-green-600 border-[.1rem] border-[#42b883] group hover:shadow-md extra-card"
  >
    <a
      href="https://entry-page-angular.vercel.app/"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Go to Angular projects"
      ><div class="absolute top-0 right-0 w-[40%] h-full flex items-center justify-center z-0">
        <v-icon icon="$vuetify" size="x-large" class="scale-[2]"></v-icon>
      </div>
      <div class="relative z-10 text-center flex flex-col gap-[1.3vw]">
        <h2
          class="transition-transform duration-300 font-Saira-stencil-one text-red text-[#42b883] group-hover:scale-x-105 text-[clamp(1rem,calc(2vw+0.5rem),2rem)] transition-transform duration-300 font-Saira-stencil-one text-red text-[#42b883] group-hover:scale-x-105"
        >
          <!--[--><span class="font-semibold">&lt;</span> Projects Angular
          <span class="font-semibold">&gt;</span
          ><!--]-->
        </h2>
        <p class="font-paragraph font-Inter text-gray-200 font-Inter">
          Some of my projects carried out with Angular.
        </p>
      </div></a
    >
  </article>
</template>

<script lang="ts" setup></script>

<style></style>
