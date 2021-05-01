import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./auth";
import profile from "./profile";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    profile,
  },
  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
});

// Subscribe to the current user's profile
store.watch((state) => {
  const user = state.auth.user || {};
  store.dispatch("profile/subscribe", user);
});
