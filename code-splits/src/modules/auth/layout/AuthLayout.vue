<template>
  <v-container fluid class="pa-0 bg-indigo-950 h-full">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="6" class="pa-8 content-center">
        <slot name="form" />
      </v-col>

      <v-col cols="12" md="6" class="pa-0">
        <slot name="chart" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup></script>

<style></style>
