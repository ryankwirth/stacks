import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./auth";
import dashboard from "./dashboard";
import profile from "./profile";
import worker from "./worker";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    dashboard,
    profile,
    worker,
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
