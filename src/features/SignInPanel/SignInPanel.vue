<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { SignInRequest } from '@/shared/types/models/requests/auth/SignInRequest.ts'
import AuthService from '@/shared/api/services/AuthService.ts'
import { validate } from '@/shared/validate/vallidate'
import { i18n } from '@/shared/lib/i18n'
import { ServerErrorBanner } from '@/shared/ui/banners'
import { LoadingButton } from '@/shared/ui/buttons'
import { useRouter } from 'vue-router'
import { useProfileStore } from '@/entities/store/profile/profile.ts'

const profileStore = useProfileStore()
const signInData = reactive<SignInRequest>({
  grant_type: 'password',
  client_id: import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  username: '',
  password: ''
})

const router = useRouter()
const spinner = ref(false)
const error = ref<string | boolean>(false)
const isSuccess = ref(false)

const signUp = () => {
  spinner.value = true
  AuthService.signIn(signInData)
    .then(({ data }) => {
      localStorage.setItem('ACCESS_TOKEN', data.access_token)
      profileStore.isAuthenticated = true
      router.push({ path: `/profile/${AuthService.getAccessTokenDecode().sub}` })
    })
    .catch(({ response }) => {
      isSuccess.value = false
      if (response.status === 401) {
        error.value = i18n.global.t('banners.serverErrors.wrongLoginOrPassword')
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
      <h1 class="text-4xl text-center">{{ $t('enterInAccount') }}</h1>
      <q-input
        v-model="signInData.username"
        class="mt-3"
        filled
        color="black"
        outlined
        :label="$t('username')"
        :rules="validate.required"
      />
      <q-input
        v-model="signInData.password"
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
        :label="$t('signIn')"
        :spinner="spinner"
      />
    </q-form>

    <RouterLink to="/sign-up">
      <q-banner rounded inline-actions class="text-white text-center mt-3 bg-cyan-800">
        {{ $t('firstTimeOnHereCreateAccount') }}
      </q-banner>
    </RouterLink>
    <ServerErrorBanner :error="error" />
  </div>
</template>
