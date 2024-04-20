<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { SignUpRequest } from '@/shared/types/models/requests/auth/SignUpRequest.ts'
import AuthService from '@/shared/api/services/AuthService.ts'
import { validate } from '@/shared/validate/vallidate'
import { i18n } from '@/shared/lib/i18n'
import SuccessSignUp from '@/features/SignUpPanel/components/SuccessSignUp.vue'
import { ServerErrorBanner } from '@/shared/ui/banners'
import { LoadingButton } from '@/shared/ui/buttons'

const signUpData = reactive<SignUpRequest>({
  username: '',
  password: ''
})

const spinner = ref(false)
const error = ref<string | boolean>(false)
const isSuccess = ref(false)

const signUp = () => {
  spinner.value = true
  AuthService.signUp(signUpData)
    .then(() => {
      error.value = false
      isSuccess.value = true
    })
    .catch(({ response }) => {
      isSuccess.value = false
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
  <div style="max-width: 400px" class="mx-auto px-5 pt-7 pb-10 rounded-lg bg-white">
    <q-form v-if="!isSuccess" @submit="signUp">
      <h1 class="text-4xl">{{ $t('createAccountOnFluentFlow') }}</h1>
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
      <LoadingButton
        color="black"
        type="submit"
        class="full-width h-14 mt-5"
        :label="$t('create')"
        :spinner="spinner"
      />
    </q-form>

    <ServerErrorBanner :error="error" />
    <SuccessSignUp :is-success="isSuccess" />
    <RouterLink v-if="!isSuccess" to="/sign-in">
      <q-banner rounded inline-actions class="text-white text-center mt-3 bg-cyan-800">
        {{ $t('alreadyRegistered') }}
      </q-banner>
    </RouterLink>
  </div>
</template>
