<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increaseCounter">Increase Counter</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}

const message = 'Hello, Vue!'
</script>
