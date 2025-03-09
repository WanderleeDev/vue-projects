<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12" lg="8">
        <v-card class="mx-auto">
          <FormEditUser />
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" class="d-none d-lg-block">
        <ProfileCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import FormEditUser from '../components/FormEditUser.vue'
import ProfileCard from '../components/ProfileCard.vue'
</script>

<style></style>
