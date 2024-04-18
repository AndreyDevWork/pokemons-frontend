<script setup lang="ts">
const props = defineProps({
  spinner: {
    type: Boolean,
    required: true
  },
  label: {
    type: [String, Number],
    required: true
  }
})
</script>

<template>
  <q-btn :label="spinner ? '' : $t('signIn')" :disable="spinner">
    <q-spinner-facebook v-if="spinner" color="white" size="1.8em" />
  </q-btn>
</template>

<style scoped lang="scss"></style>
