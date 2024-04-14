import { i18n } from '@/shared/lib/i18n'

const requiredValidator = (val: any) => !!val || i18n.global.t('app.validate.required')
const passwordLengthValidator = (val: string) =>
  val.length >= 8 || i18n.global.t('app.validate.minLength', { length: 8 })

export const validate = {
  required: [requiredValidator],
  password: [requiredValidator, passwordLengthValidator]
}
