<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { SignUpRequest } from '@/shared/types/models/requests/auth/SignUpRequest.ts'
import AuthService from '@/shared/api/services/AuthService.ts'
import { validate } from '@/shared/validate/vallidate'
import { i18n } from '@/shared/lib/i18n'

const signUpData = reactive<SignUpRequest>({
  username: '',
  password: ''
})

const spinner = ref(false)
const error = ref<string | boolean>(false)
const success = ref(false)

const signUp = () => {
  spinner.value = true
  AuthService.signUp(signUpData)
    .then(() => {
      error.value = false
      success.value = true
    })
    .catch(({ response }) => {
      success.value = false
      if (response.status === 409) {
        error.value = i18n.global.t('banners.serverErrors.signUpWithUsername')
      } else {
        error.value = response.data.message
      }
    })
    .finally(() => {
      spinner.value = false
    })
}
</script>
<template>
  <q-form
    style="max-width: 400px"
    class="mx-auto px-5 pt-8 pb-10 rounded-lg bg-white"
    @submit="signUp"
  >
    <h1 class="text-4xl">{{ $t('CreateAccountOnFluentFlow') }}</h1>
    <q-input
      v-model="signUpData.username"
      class="mt-3"
      filled
      color="black"
      outlined
      :label="$t('username')"
      :rules="validate.required"
    />
    <q-input
      v-model="signUpData.password"
      class="mt-2"
      filled
      color="black"
      outlined
      :label="$t('password')"
      :rules="validate.password"
    />
    <q-btn
      color="black"
      type="submit"
      class="full-width h-14 mt-5"
      :label="spinner ? '' : $t('create')"
      :disable="spinner"
    >
      <q-spinner-facebook v-if="spinner" color="white" size="1.8em" />
    </q-btn>
    <q-banner v-if="error" rounded inline-actions class="text-white text-center mt-3 bg-rose-800">
      {{ error }}
    </q-banner>
    <q-banner
      v-if="success"
      rounded
      inline-actions
      class="text-white text-center mt-3 bg-emerald-900"
    >
      {{ $t('banners.successSignUp') }}
    </q-banner>
  </q-form>
</template>
