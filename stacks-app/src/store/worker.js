const actions = {
  fetchInstrument({ commit, state }, payload) {
    // If we already have data for this instrument, don't do anything
    if (state.instruments[payload.symbol]) {
      return;
    }

    // Fetch one years' worth of instrument data for the given ID
    fetch(
      `https://stacks-worker.ryanwirth.workers.dev/api/v1/instrument/${payload.id}/1Y`
    )
      .then((response) => response.json())
      .then((json) =>
        commit("setInstrument", {
          data: json,
          symbol: payload.symbol,
        })
      );
  },
};

const getters = {};

const mutations = {
  setInstrument(state, payload) {
    state.instruments[payload.symbol] = payload.data;
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
