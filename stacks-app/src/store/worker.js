const actions = {
  fetchInstruments({ dispatch }, instruments) {
    const promises = instruments.map((instrument) =>
      dispatch("fetchInstrument", instrument)
    );

    // Instruct the dashboard to calculate time series
    return Promise.all(promises).then(() =>
      dispatch("dashboard/calculateSeries", instruments, { root: true })
    );
  },
  fetchInstrument({ commit, state }, instrument) {
    // If we already have data for this instrument, don't do anything
    if (state.instruments[instrument.symbol]) {
      return Promise.resolve();
    }

    // Fetch one years' worth of instrument data for the given ID
    return fetch(
      `https://stacks-worker.ryanwirth.workers.dev/api/v1/instrument/${instrument.id}/1Y`
    )
      .then((response) => response.json())
      .then((json) => commit("setInstrument", json));
  },
};

const getters = {
  getSeriesForSymbol(state) {
    return (symbol) =>
      state.instruments[symbol] ? state.instruments[symbol].series : {};
  },
};

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
