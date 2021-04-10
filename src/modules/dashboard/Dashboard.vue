<template>
  <div>Dashboard</div>
  <growth-chart :chart-data="chartData"></growth-chart>
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
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>
