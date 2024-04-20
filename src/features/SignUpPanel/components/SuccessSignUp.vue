<script setup lang="ts">
defineProps({
  isSuccess: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div v-if="isSuccess">
    <q-banner rounded inline-actions class="text-white text-center mt-3 bg-emerald-900">
      {{ $t('banners.successSignUp') }}
    </q-banner>
    <RouterLink to="/sign-in">
      <q-btn :label="$t('toSignIn')" class="full-width text-white bg-emerald-900 h-14 mt-5">
      </q-btn>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
