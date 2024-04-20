<script setup lang="ts">
import AuthService from '@/shared/api/services/AuthService.ts'
import { useProfileStore } from '@/shared/store/profile.ts'

const profileStore = useProfileStore()
const logout = () => {
  AuthService.logout()
  window.location.reload()
}
</script>

<template>
  <q-btn
    v-if="profileStore.isAuthenticated"
    outline
    color="white"
    icon="directions"
    @click="logout"
  />
</template>

<style scoped lang="scss"></style>
