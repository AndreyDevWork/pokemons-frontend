<script setup lang="ts">
const props = defineProps({
  error: {
    type: [Boolean, String],
    required: true
  }
})
</script>

<template>
  <q-banner v-if="error" rounded inline-actions class="text-white text-center mt-3 bg-rose-800">
    {{ error }}
  </q-banner>
</template>
