<script setup lang="ts">
import { SupportedLocales } from '@/shared/types/enums/supportedLocales.ts'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const savedLocale = localStorage.getItem('locale')

locale.value = savedLocale || SupportedLocales.en
const switchLocale = (value: SupportedLocales) => {
  locale.value = value
  localStorage.setItem('locale', value)
}
</script>
<template>
  <div>
    <q-btn-dropdown
      outline
      icon="translate"
      color="white"
      :label="locale"
      dropdown-icon="change_history"
    >
      <q-list>
        <q-item
          v-for="value in SupportedLocales"
          :key="value"
          v-close-popup
          clickable
          @click="switchLocale(value)"
        >
          <q-item-section>
            <q-item-label>{{ value.toUpperCase() }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>
