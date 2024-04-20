import { type RouterOptions } from 'vue-router'

export const routes: RouterOptions['routes'] = [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/pages/Auth/SignUpPage'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/pages/Auth/SignInPage'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => import('@/pages/Profile/ProfilePage'),
    meta: {
      requiresAuth: true
    }
  }
]
