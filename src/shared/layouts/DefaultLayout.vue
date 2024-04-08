<template>
  <div class="layout-bg">
    <q-layout view="hHh lpR fFf">
      <slot name="header" />
      <q-page-container>
        <div class="container pt-4 pb-4 px-3 mx-auto">
          <router-view />
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.layout-bg {
  background: url('../assets/white-bg.jpg') center center/cover no-repeat;
}
</style>
