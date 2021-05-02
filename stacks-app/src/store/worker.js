const actions = {
  fetchInstruments({ dispatch }, instruments) {
    instruments.forEach((instrument) =>
      dispatch("fetchInstrument", instrument)
    );
  },
  fetchInstrument({ dispatch, state }, instrument) {
    // If we already have data for this instrument, don't do anything
    if (state.instruments[instrument.symbol]) {
      return;
    }

    // Fetch one years' worth of instrument data for the given ID
    fetch(
      `https://stacks-worker.ryanwirth.workers.dev/api/v1/instrument/${instrument.id}/1Y`
    )
      .then((response) => response.json())
      .then((json) => dispatch("onInstrument", json));
  },
  onInstrument({ commit, dispatch }, json) {
    commit("setInstrument", json);

    // Instruct the dashboard to handle this instrument data
    dispatch("dashboard/onInstrument", json, { root: true });
  },
};

const getters = {};

const mutations = {
  setInstrument(state, json) {
    state.instruments[json.symbol] = json;
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
