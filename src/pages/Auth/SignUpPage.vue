<template>
  <div style="max-width: 360px" class="mx-auto">
    <h1 class="text-4xl">Sign-Up</h1>
    <q-input v-model="username" class="mt-3" filled color="black" outlined label="Username" />
    <q-input v-model="password" class="mt-3" filled color="black" outlined label="Password" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref()
const password = ref()
</script>

<style scoped></style>
