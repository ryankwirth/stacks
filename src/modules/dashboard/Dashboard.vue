<template>
  <div class="dashboard">
    <div class="dashboard__header">
      <metrics />
    </div>
    <growth-chart />
  </div>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue";
import Metrics from "./components/Metrics.vue";

export default {
  components: {
    GrowthChart,
    Metrics,
  },
};
</script>

<style>
.dashboard__header {
  display: flex;
}
</style>
