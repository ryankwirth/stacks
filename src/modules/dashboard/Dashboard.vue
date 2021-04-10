<template>
  <div class="dashboard">
    <growth-chart :chart-data="chartData" />
  </div>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue";

const labels = [...Array(365).keys()];
const lineData = labels.map((value) => Math.random() * value * 5_000);
const barData = labels.map((value) => Math.random() * (value / 365) * 0.025);

export default {
  components: {
    GrowthChart,
  },
  computed: {
    chartData() {
      return {
        labels,
        datasets: [
          {
            type: "line",
            yAxisID: "A",
            data: lineData,
            pointRadius: 0,
            borderWidth: 2,
            borderColor: "#00dd6a",
          },
          {
            type: "bar",
            yAxisID: "B",
            data: barData,
            backgroundColor: "#3e4345",
          },
        ],
      };
    },
  },
};
</script>
