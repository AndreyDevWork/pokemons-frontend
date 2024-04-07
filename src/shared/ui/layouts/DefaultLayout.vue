<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          {{ $t('app.name') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="container mt-4 px-3 mx-auto">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts"></script>
