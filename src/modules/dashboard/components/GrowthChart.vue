<template>
  <line-chart :chart-data="chartData" :options="options" />
</template>

<script>
import LineChart from "@/common/components/LineChart.vue";
import { createOptions } from "./GrowthChart.config";

const days = [...Array(365).keys()];
const labels = days.map((value) => new Date(1585769228000 + 86400000 * value));
const lineData = days.map((value) => Math.random() * value * 5_000);
const barData = days.map((value) => Math.random() * (value / 365) * 0.025);

export default {
  components: {
    LineChart,
  },
  computed: {
    chartData() {
      return {
        labels,
        datasets: [
          {
            type: "line",
            yAxisID: "dollars",
            data: lineData,
            pointRadius: 0,
            borderWidth: 1.5,
            borderColor: "#00dd6a",
          },
          {
            type: "bar",
            yAxisID: "return",
            data: barData,
            backgroundColor: "#3e4345",
          },
        ],
      };
    },
    options() {
      return createOptions();
    },
  },
};
</script>
