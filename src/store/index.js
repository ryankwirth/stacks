import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { auth } from './auth'

export const store = createStore({
  modules: {
    auth
  },
  plugins: [ createPersistedState() ]
})
