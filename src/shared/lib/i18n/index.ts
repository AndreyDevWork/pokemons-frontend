import { createI18n } from 'vue-i18n'
import { en } from './en.ts'
import { ru } from './ru'
import { fr } from './fr.ts'

export const i18n = createI18n({
  locale: 'ru',
  messages: {
    en,
    ru,
    fr
  }
})
