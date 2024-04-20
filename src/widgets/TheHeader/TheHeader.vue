<script setup lang="ts">
import { LocaleSwitcher } from '@/features/LocaleSwitcher'
import { TheLogout } from '@/features/TheLogout'
</script>

<template>
  <q-header elevated class="bg-black text-white">
    <q-toolbar>
      <q-toolbar-title>
        {{ $t('app.name') }}
      </q-toolbar-title>
      <div class="flex gap-x-2.5 py-4">
        <LocaleSwitcher />
        <TheLogout></TheLogout>
      </div>
    </q-toolbar>
  </q-header>
</template>
