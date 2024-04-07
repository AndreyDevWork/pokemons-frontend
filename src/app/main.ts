import './styles/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/shared/lib/i18n'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(Quasar, {
    plugins: {} // import Quasar plugins and add here
  })
  .use(i18n)

app.mount('#app')
