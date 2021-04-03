import { createRouter, createWebHistory } from 'vue-router'
import { Accounts, Dashboard, Positions, Strategies } from '@/modules'

export const router = createRouter({
  routes: [
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/positions',
      name: 'Positions',
      component: Positions
    },
    {
      path: '/strategies',
      name: 'Strategies',
      component: Strategies
    }
  ],
  history: createWebHistory()
})
