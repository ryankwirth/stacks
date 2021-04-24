import { Firebase } from "@/services";

const noop = () => {};

const actions = {
  subscribe({ commit, state }, user) {
    // If we're already subscribed to this user, don't do anything
    if (state.uid === user.uid) {
      return;
    }

    // Unsubscribe from the previous snapshot listener
    state.unsubscribe();

    // Subscribe to a new snapshot listener if the user is logged in
    console.log(Firebase.firestore);
    console.log(user.uid);
    const unsubscribe = user.uid
      ? Firebase.firestore
          .collection("profiles")
          .doc(user.uid)
          .onSnapshot((doc) => {
            console.log("onSnapshot");
            console.log(doc);
            console.log(doc.data());
          })
      : noop;

    commit("setUid", user.uid);
    commit("setUnsubscribe", unsubscribe);
  },
};

const getters = {};

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
