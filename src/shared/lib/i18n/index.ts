import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ru: {
    message: {
      hello: 'Привет мир'
    }
  }
}

export const i18n = createI18n({
  locale: 'ru',
  messages
})
