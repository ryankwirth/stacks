<template>
  <div class="dashboard">
    <div>Dashboard</div>
    <growth-chart :chart-data="chartData" />
  </div>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue";

const labels = [...Array(365).keys()];
const lineData = labels.map((value) => Math.random() * value);
const barData = labels.map((value) => Math.random() * value);

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
            borderColor: "#00dd6a",
            data: lineData,
          },
          {
            type: "bar",
            backgroundColor: "#3e4345",
            data: barData,
          },
        ],
      };
    },
  },
};
</script>
