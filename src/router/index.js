import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '@/store'

import { SignIn } from '@/modules/sign-in'
import { SignUp } from '@/modules/sign-up'

import { Main } from '@/common/layouts'
import { Accounts } from '@/modules/accounts'
import { Dashboard } from '@/modules/dashboard'
import { Positions } from '@/modules/positions'
import { Strategies } from '@/modules/strategies'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
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
      redirect: '/dashboard',
      component: Main,
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
})

router.beforeEach((to, from, next) => {
  const isAuthorized = store.getters['auth/isAuthorized']
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (isAuthorized != requiresAuth) {
    next({ name: requiresAuth ? 'Sign In' : 'Dashboard' })
  } else {
    next()
  }
})
