<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { SignUpRequest } from '@/shared/types/models/requests/auth/SignUpRequest.ts'
import AuthService from '@/shared/api/services/AuthService.ts'

const signUpData = reactive<SignUpRequest>({
  username: '',
  password: ''
})

const spinner = ref(false)
const error = ref(false)

const signUp = () => {
  spinner.value = true
  AuthService.signUp(signUpData)
    .then(() => {
      error.value = false
    })
    .catch(({ response }) => {
      error.value = response.data.message
      console.log(error.value)
    })
    .finally(() => {
      spinner.value = false
    })
}
</script>
<template>
  <div style="max-width: 400px" class="mx-auto px-5 pt-8 pb-10 rounded-lg bg-white">
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
      :disable="spinner"
      @click="signUp"
    >
      <q-spinner-facebook v-if="spinner" color="white" size="1.8em" />
    </q-btn>
    <q-banner v-if="error" rounded inline-actions class="text-white mt-3 bg-rose-800">
      {{ error }}
    </q-banner>
  </div>
</template>
