import './styles/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

const i18n = createI18n({})

app
  .use(createPinia())
  .use(router)
  .use(Quasar, {
    plugins: {} // import Quasar plugins and add here
  })
  .use(i18n)

app.mount('#app')
