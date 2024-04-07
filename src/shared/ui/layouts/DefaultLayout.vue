<template>
  <q-layout view="hHh lpR fFf">
    <TheHeader />
    <q-page-container>
      <div class="container mt-4 px-3 mx-auto">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { TheHeader } from '@/widgets/TheHeader'
</script>
