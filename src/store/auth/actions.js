import { Firebase } from '@/services'

export const actions = {
  signIn({ commit }, payload) {
    return Firebase
      .auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        commit('setUser', response.user);
      })
      .catch(error => {
        commit('setError', error.message);
      })
  },
  signUp({ commit }, payload) {
    return Firebase
      .auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        commit('setUser', response.user)
      })
      .catch(error => {
        commit('setError', error.message)
      })
  }
}
