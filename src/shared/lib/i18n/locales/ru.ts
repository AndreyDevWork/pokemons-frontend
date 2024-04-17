import { ruValidate } from '@/shared/lib/i18n/locales/validate/ruValidate.ts'
import { ruBanners } from '@/shared/lib/i18n/locales/banners/ruBanners.ts'

const appName = 'Fluent Flow'

export const ru = {
  app: {
    name: appName,
    validate: ruValidate
  },
  banners: ruBanners,
  dateOfBirth: 'День рождения',
  firstname: 'Имя',
  lastname: 'Фамилия',
  username: 'Имя пользователя',
  password: 'Пароль',
  signUp: 'Зарегестрироваться',
  signIn: 'Войти',
  toSignIn: 'Перейти на страницу входа',
  create: 'Создать',
  languages: 'Языки',
  CreateAccountOnFluentFlow: `Создайте аккаунт на ${appName}`
}
