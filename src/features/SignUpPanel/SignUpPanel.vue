<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { SignUpRequest } from '@/shared/types/models/requests/auth/SignUpRequest.ts'
import AuthService from '@/shared/api/services/AuthService.ts'

const signUpData = reactive<SignUpRequest>({
  username: '',
  password: ''
})

const signUp = async () => {
  spinner.value = true
  await AuthService.signUp(signUpData)
  spinner.value = false
}

const spinner = ref(false)
</script>
<template>
  <div style="max-width: 400px" class="mx-auto px-5 pt-8 pb-16 rounded-lg bg-white">
    <h1 class="text-4xl">{{ $t('CreateAccountOnFluentFlow') }}</h1>
    <q-input
      v-model="signUpData.username"
      class="mt-3"
      filled
      color="black"
      outlined
      :label="$t('username')"
    />
    <q-input
      v-model="signUpData.password"
      class="mt-3"
      filled
      color="black"
      outlined
      :label="$t('password')"
    />
    <q-btn
      color="black"
      class="full-width h-14 mt-3"
      :label="spinner ? '' : $t('create')"
      @click="signUp"
    >
      <q-spinner-facebook v-if="spinner" color="white" size="1.8em" />
    </q-btn>
  </div>
</template>
