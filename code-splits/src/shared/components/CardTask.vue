<template>
  <v-card
    class="mb-2 w-[min(100%,25rem)]"
    density="compact"
    prepend-avatar="https://res.cloudinary.com/dy8gpozi6/image/upload/v1740447261/meme_gato_rwte5r.webp"
    subtitle="Salsa, merengue, y cumbia"
    title="Cuba"
    variant="text"
    border
  >
    <v-img height="128" src="https://picsum.photos/512/128?image=660" cover></v-img>

    <v-card-text>
      During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.
    </v-card-text>

    <template v-slot:actions>
      <v-btn color="primary" variant="text">View More</v-btn>

      <v-btn color="primary" variant="text">See in Map</v-btn>
    </template>
  </v-card>
</template>

<script lang="ts" setup></script>
