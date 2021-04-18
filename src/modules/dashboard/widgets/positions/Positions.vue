<template>
  <div class="positions">
    <h1>Top 5 Positions</h1>
    <div class="positions__details">
      <div class="positions__chart">
        <positions-chart :positions="positions" />
      </div>
      <div class="positions__items">
        <positions-item
          v-for="position in positions"
          v-bind="position"
          :key="position.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { PositionsChart, PositionsItem } from "./components";

export default {
  components: {
    PositionsChart,
    PositionsItem,
  },
  computed: {
    positions() {
      return [
        {
          name: "Facebook, Inc.",
          color: "#b0c5f5",
          value: 12435756,
          return: 0.175,
        },
        {
          name: "Amazon.com, Inc.",
          color: "#8ac8bb",
          value: 12325654,
          return: 0.241,
        },
        {
          name: "Apple Inc.",
          color: "#b3a8db",
          value: 346765,
          return: 0.026,
        },
        {
          name: "Uber Technologies",
          color: "#f4caca",
          value: 1324543,
          return: 0.147,
        },
        {
          name: "Tesla Inc.",
          color: "#f7f3c4",
          value: 143356,
          return: 0.114,
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.positions {
  flex: 1;
  padding: 12px;

  border-radius: 6px;
  box-shadow: 0 8px 16px $color-neutral-900;

  h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }
}

.positions__details {
  display: flex;
  margin-bottom: 12px;

  > div {
    flex: 1;
  }
}

.positions__chart {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}

.positions__items {
  margin: 0 20px;
}
</style>
