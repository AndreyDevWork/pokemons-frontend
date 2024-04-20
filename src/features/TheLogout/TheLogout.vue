<script setup lang="ts">
import AuthService from '@/shared/api/services/AuthService.ts'

const logout = () => {
  AuthService.logout()
  window.location.reload()
}
</script>

<template>
  <q-btn v-if="AuthService.isAuth()" outline color="white" icon="directions" @click="logout" />
</template>

<style scoped lang="scss"></style>
