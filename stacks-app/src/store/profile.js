import { Firebase } from "@/services";

const noop = () => {};

const actions = {
  onSnapshot({ commit, dispatch }, profile) {
    commit("setProfile", profile);

    // Instruct the worker to fetch data for all of the instruments
    dispatch("worker/fetchInstruments", profile.instruments, { root: true });
  },
  subscribe({ commit, dispatch, state }, user) {
    // If we're already subscribed to this user, don't do anything
    if (state.uid === user.uid) {
      return;
    }

    // Unsubscribe from the previous snapshot listener
    state.unsubscribe();

    // Subscribe to a new snapshot listener if the user is logged in
    const unsubscribe = user.uid
      ? Firebase.db
          .collection("profiles")
          .doc(user.uid)
          .onSnapshot((doc) => dispatch("onSnapshot", doc.data()))
      : noop;

    commit("setUid", user.uid);
    commit("setUnsubscribe", unsubscribe);
  },
};

const getters = {
  getTransactionsForSymbol(state) {
    return (symbol) =>
      state.profile
        ? state.profile.transactions.filter(
            (transaction) => transaction.symbol === symbol
          )
        : [];
  },
};

const mutations = {
  setUid(state, uid) {
    state.uid = uid;
  },
  setProfile(state, profile) {
    state.profile = profile;
  },
  setUnsubscribe(state, unsubscribe) {
    state.unsubscribe = unsubscribe;
  },
};

const state = {
  uid: null,
  profile: null,
  unsubscribe: noop,
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
