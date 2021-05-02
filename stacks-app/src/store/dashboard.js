const actions = {
  calculateSeries({ dispatch }, instruments) {
    return instruments.map((instrument) =>
      dispatch("calculateSeriesForSymbol", instrument.symbol)
    );
  },
  calculateSeriesForSymbol({ rootGetters }, symbol) {
    const series = rootGetters["worker/getSeriesForSymbol"](symbol);
    const transactions = rootGetters["profile/getTransactionsForSymbol"](symbol);

    // Get the prices and timestamps as epoch seconds
    const prices = series.prices;
    const timestamps = series.timeStamps.map((timestamp) => new Date(timestamp).getTime());

    console.log("calculateSeriesForSymbol");
    console.log(symbol);
    console.log(prices);
    console.log(timestamps);
    console.log(transactions);
  },
};

const getters = {};

const mutations = {};

const state = {
  series: [],
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
