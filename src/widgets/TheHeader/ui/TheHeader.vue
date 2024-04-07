<script setup lang="ts">
import { SupportedLocales } from '@/shared/consts/supportedLocales.ts'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template>
  <div>
    <q-header elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          {{ $t('app.name') }}
        </q-toolbar-title>
        <div class="q-pa-md">
          <q-btn-dropdown
            outline
            icon="translate"
            color="white"
            :label="locale"
            dropdown-icon="change_history"
          >
            <q-list>
              <q-item
                v-for="(value, key) in SupportedLocales"
                :key="value"
                v-close-popup
                clickable
                @click="locale = value"
              >
                <q-item-section>
                  <q-item-label>{{ key }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>
