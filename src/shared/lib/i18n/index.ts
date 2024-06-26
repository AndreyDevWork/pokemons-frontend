import { createI18n } from 'vue-i18n'
import { en } from './locales/en'
import { ru } from './locales/ru'
import { fr } from './locales/fr'
import { SupportedLocales } from '@/shared/types/enums/supportedLocales.ts'

export const i18n = createI18n({
  locale: SupportedLocales.en,
  fallbackLocale: SupportedLocales.en,
  legacy: false,
  messages: {
    [SupportedLocales.en]: en,
    [SupportedLocales.ru]: ru,
    [SupportedLocales.fr]: fr
  }
})
