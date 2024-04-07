<script setup lang="ts">
import { LocaleSwitcher } from '@/features/LocaleSwitcher'
</script>

<template>
  <div>
    <q-header elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          {{ $t('app.name') }}
        </q-toolbar-title>
        <LocaleSwitcher />
      </q-toolbar>
    </q-header>
  </div>
</template>
