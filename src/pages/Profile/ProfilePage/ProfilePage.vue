<script setup lang="ts">
import { ProfileService } from '@/shared/api/services'
import { useRoute } from 'vue-router'
import { useProfileStore } from '@/entities/store/profile/profile.ts'

const route = useRoute()
const profileStore = useProfileStore()
ProfileService.show(Number(route.params.id)).then(({ data }) => profileStore.$patch(data))
</script>

<template><div>Мой профиль</div></template>

<style scoped lang="scss"></style>
