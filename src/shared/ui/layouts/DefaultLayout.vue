<template>
  <q-layout view="hHh lpR fFf">
    <slot name="header" />
    <q-page-container>
      <div class="container mt-4 px-3 mx-auto">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
