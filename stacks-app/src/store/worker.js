const actions = {
  fetchInstrument({ commit, state }, id) {
    // If we already have data for this instrument, don't do anything
    if (state.instruments[id]) {
      return;
    }

    // Fetch one years' worth of instrument data for the given ID
    fetch(
      `https://stacks-worker.ryanwirth.workers.dev/api/v1/instrument/${id}/1Y`
    )
      .then((response) => response.json())
      .then((json) => commit("setInstrument", json));
  },
};

const getters = {};

const mutations = {
  setInstrument(state, json) {
    state.instruments[json.instrumentId] = json;
  },
};

const state = {
  instruments: [],
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
