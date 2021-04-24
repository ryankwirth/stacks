import { Firebase } from "@/services";

const actions = {
  signIn({ commit }, payload) {
    return Firebase.auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },
  signUp({ commit }, payload) {
    return Firebase.auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },
};

const getters = {
  isAuthorized(state) {
    return state.user != null;
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  },
};

const state = {
  user: null,
  error: null,
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
