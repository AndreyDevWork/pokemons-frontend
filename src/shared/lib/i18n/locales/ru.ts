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
  enterInAccount: 'Вход',
  toSignIn: 'Перейти на страницу входа',
  create: 'Создать',
  languages: 'Языки',
  createAccountOnFluentFlow: `Создайте аккаунт на ${appName}`,
  firstTimeOnHereCreateAccount: `Впервые на ${appName}? Создайте аккаунт`,
  alreadyRegistered: 'Уже есть учетная запись? Войти'
}
