const actions = {
  calculateSeries({ dispatch }, instruments) {
    return instruments.map((instrument) =>
      dispatch("calculateSeriesForSymbol", instrument.symbol)
    );
  },
  calculateSeriesForSymbol({ commit, rootGetters }, symbol) {
    const series = rootGetters["worker/getSeriesForSymbol"](symbol);
    const transactions = rootGetters["profile/getTransactionsForSymbol"](
      symbol
    );

    // Get the prices and timestamps as epoch seconds
    const prices = series.prices;
    const timestamps = series.timeStamps.map(
      (timestamp) => new Date(timestamp).getTime() / 1000
    );

    // Keep separate arrays for the series we're calculating
    const values = [];
    const labels = [];

    // Track the last price, quantity, and timestamp
    let price = 0;
    let quantity = 0;
    let timestamp = 0;

    while (transactions.length > 0 || timestamps.length > 0) {
      const hasTimestamp = timestamps.length > 0;
      const hasTransaction = transactions.length > 0;
      const doesTransactionPrecedeTimestamp =
        hasTimestamp &&
        hasTransaction &&
        transactions[0].timestamp.seconds < timestamps[0];

      if (!hasTimestamp || doesTransactionPrecedeTimestamp) {
        // The transaction occurs before the next series point
        const transaction = transactions.shift();
        quantity += transaction.quantity;
        timestamp = transaction.timestamp.seconds;
      } else {
        // The series point occurs before the next transaction
        price = prices.shift();
        timestamp = timestamps.shift();
      }

      values.push(price * quantity);
      labels.push(timestamp);
    }

    console.log("calculateSeriesForSymbol");
    console.log(symbol);
    console.log(values);
    console.log(labels);

    commit("setSeries", { symbol, values, labels });
  },
};

const getters = {};

const mutations = {
  setSeries(state, { symbol, values, labels }) {
    state.series[symbol] = { values, labels };
  },
};

const state = {
  series: {},
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
