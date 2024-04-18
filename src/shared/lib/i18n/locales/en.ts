import { enValidate } from '@/shared/lib/i18n/locales/validate/enValidate.ts'
import { enBanners } from '@/shared/lib/i18n/locales/banners/enBanners.ts'

const appName = 'Fluent Flow'

export const en = {
  app: {
    name: appName,
    validate: enValidate
  },
  banners: enBanners,
  dateOfBirth: 'Date of birth',
  firstname: 'Firstname',
  lastname: 'Lastname',
  username: 'Username',
  password: 'Password',
  signUp: 'Sign up',
  signIn: 'Sign in',
  enterInAccount: 'Sign in',
  toSignIn: 'Go to login page',
  create: 'Create',
  languages: 'languages',
  createAccountOnFluentFlow: `Create an account on ${appName}`,
  firstTimeOnHereCreateAccount: `New to ${appName}? Create an account`,
  alreadyRegistered: 'Already have an account? Sign in'
}
