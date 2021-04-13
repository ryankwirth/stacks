<template>
  <line-chart
    :create-data="createData"
    :create-options="createOptions"
    :style="styles"
    :width="100"
  />
</template>

<script>
import LineChart from "@/common/components/LineChart.vue";
import { createData, createOptions } from "./AccountChart.config";

export default {
  components: {
    LineChart,
  },
  props: {
    change: Number,
  },
  computed: {
    createData() {
      const days = [...Array(365).keys()];
      const labels = days.map(
        (value) => new Date(1585769228000 + 86400000 * value)
      );
      const dollars = days.map((value) => value * 5_000);
      const isPositive = this.change >= 0;
      return createData(labels, dollars, isPositive);
    },
    createOptions() {
      return createOptions();
    },
    styles() {
      return {
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "-2px",
        height: "114px",
      };
    },
  },
};
</script>
