<script setup lang="ts">
import AuthService from '@/shared/api/services/AuthService.ts'
import { useProfileStore } from '@/entities/store/profile/profile.ts'

const profileStore = useProfileStore()
const logout = () => {
  AuthService.logout()
  window.location.replace('/sign-in')
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
