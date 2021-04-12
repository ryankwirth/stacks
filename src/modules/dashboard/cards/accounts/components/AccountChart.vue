<template>
  <line-chart
    :create-data="createData"
    :create-options="createOptions"
    :style="styles"
  />
</template>

<script>
import LineChart from "@/common/components/LineChart.vue";
import { createData, createOptions } from "./AccountChart.config";

export default {
  components: {
    LineChart,
  },
  computed: {
    createData() {
      const days = [...Array(365).keys()];
      const labels = days.map(
        (value) => new Date(1585769228000 + 86400000 * value)
      );
      const dollars = days.map((value) => value * 5_000);
      const returns = days.map(
        (value) => Math.random() * (value / 365) * 0.025
      );
      return createData(labels, dollars, returns);
    },
    createOptions() {
      return createOptions();
    },
    styles() {
      return {
        height: "100px",
      };
    },
  },
};
</script>
