import { createRouter, createWebHistory } from 'vue-router'
import { store } from '@/store'

import { SignIn } from '@/modules/sign-in'
import { SignUp } from '@/modules/sign-up'

import { Authorized } from '@/common/layouts'
import { Accounts } from '@/modules/accounts'
import { Dashboard } from '@/modules/dashboard'
import { Positions } from '@/modules/positions'
import { Strategies } from '@/modules/strategies'

export const router = createRouter({
  routes: [
    {
      path: '/sign-in',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/',
      component: Authorized,
      children: [
        {
          path: 'accounts',
          name: 'Accounts',
          component: Accounts
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'positions',
          name: 'Positions',
          component: Positions
        },
        {
          path: 'strategies',
          name: 'Strategies',
          component: Strategies
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ],
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthorized = store.getters['auth/isAuthorized']

    if (!isAuthorized) {
      next({ name: 'Sign In' })
    } else {
      next()
    }
  } else {
    next()
  }
})
