<script setup lang="ts">
import { ref } from 'vue'

const username = ref()
const password = ref()
</script>
<template>
  <div style="max-width: 400px" class="mx-auto px-5 pt-8 pb-16 rounded-lg bg-white">
    <h1 class="text-4xl">{{ $t('CreateAccountOnFluentFlow') }}</h1>
    <q-input
      v-model="username"
      class="mt-3"
      filled
      color="black"
      outlined
      :label="$t('username')"
    />
    <q-input
      v-model="password"
      class="mt-3"
      filled
      color="black"
      outlined
      :label="$t('password')"
    />
    <q-btn color="black" class="full-width mt-3" :label="$t('create')" />
  </div>
</template>
