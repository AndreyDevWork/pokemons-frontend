import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import AuthService from '@/shared/api/services/AuthService.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !AuthService.isAuth()) {
    next({
      path: '/sign-in',
      query: { redirect: to.fullPath }
    })
  } else if ((to.path === '/sign-in' || to.path === '/sign-up') && AuthService.isAuth()) {
    next({
      path: `/profile/${AuthService.getAccessTokenDecode().sub}`
    })
  }

  next()
})

export default router
