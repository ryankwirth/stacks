<template>
  <div class="dashboard">
    <div class="dashboard__metrics">
      <metric />
      <metric />
      <metric />
    </div>
    <growth-chart />
  </div>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue";
import Metric from "./components/Metric.vue";

export default {
  components: {
    GrowthChart,
    Metric,
  },
};
</script>

<style>
.dashboard__metrics {
  display: flex;
}
</style>
