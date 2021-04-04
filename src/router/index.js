import { createRouter, createWebHistory } from 'vue-router'

import { Authorized } from '@/common/layouts'

import { Accounts } from '@/modules/accounts'
import { Authorization } from '@/modules/authorization'
import { Dashboard } from '@/modules/dashboard'
import { Positions } from '@/modules/positions'
import { Strategies } from '@/modules/strategies'

export const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Authorization',
      component: Authorization
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
      ]
    }
  ],
  history: createWebHistory()
})
