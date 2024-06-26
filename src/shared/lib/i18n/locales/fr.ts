import { frValidate } from '@/shared/lib/i18n/locales/validate/frValidate.ts'
import { frBanners } from '@/shared/lib/i18n/locales/banners/frBanners.ts'

const appName = 'Fluent Flow'

export const fr = {
  app: {
    name: 'Fluent Flow',
    validate: frValidate
  },
  banners: frBanners,
  dateOfBirth: 'Date de naissance',
  firstname: 'Prénom',
  lastname: 'Nom de famille',
  username: "Nom d'utilisateur",
  password: 'Mot de passe',
  signUp: "S'inscrire",
  signIn: 'Se connecter',
  enterInAccount: 'Se connecter',
  toSignIn: 'Aller à la page de connexion',
  create: 'Créer',
  languages: 'Langages',
  createAccountOnFluentFlow: `Créer un compte sur ${appName}`,
  firstTimeOnHereCreateAccount: `Vous débutez avec ${appName}? Créer un compte`,
  alreadyRegistered: 'Vous avez déjà un compte? Se connecter'
}
