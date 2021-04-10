<template>
  <div class="dashboard">
    <div>Dashboard</div>
    <growth-chart :chart-data="chartData" />
  </div>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue";

export default {
  components: {
    GrowthChart,
  },
  computed: {
    chartData() {
      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Line data",
            borderColor: "#00dd6a",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
          {
            label: "bar data",
            backgroundColor: "#3e4345",
            data: [40, 39, 10, 40, 39, 80, 40],
            type: "bar",
          },
        ],
      };
    },
  },
};
</script>
