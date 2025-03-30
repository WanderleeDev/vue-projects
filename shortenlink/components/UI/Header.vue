<template>
  <div class="h-16 w-full">
    <header
      class="flex items-center justify-between w-full bg-white/20 backdrop-blur-xs dark:bg-gray-800/20 shadow-sm dark:shadow-white/30 p-4 absolute top-0 z-10 transition-all duration-500 ease-in-out reveal-header"
    >
      <h1><CommonLogoPage /></h1>

      <LazyUINavbarMobile class="sm:hidden" :paths hydrate-on-visible />
      <UINavbarDesktop class="hidden sm:flex" :paths />
    </header>
  </div>
</template>

<script setup lang="ts">
export interface Paths {
  label: string;
  path: string;
}

const paths: Paths[] = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Profile", path: "/profile" },
  { label: "Sign in", path: "/auth/signIn" },
];
</script>

<style scoped>
.reveal-header {
  animation: re-reveal linear forwards;
  animation-timeline: view(block);
  animation-range: exit-crossing 100% exit-crossing 200%;
}

@keyframes re-reveal {
  from {
    position: absolute;
    transform: translateY(-100%);
  }
  to {
    position: fixed;
    transform: translateY(0);
  }
}
</style>
