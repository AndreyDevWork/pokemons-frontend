import { type RouterOptions } from 'vue-router'

export const routes: RouterOptions['routes'] = [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/pages/Auth/SignUpPage'),
    meta: {
      requiresAuth: false
    }
  }
]
