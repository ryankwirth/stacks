<template>
  <div class="dashboard">
    <div class="dashboard__metrics">
      <metric label="All Over Value" :value="2341558.76" />
      <metric label="Return" :value="1217610.16" :change="0.521" />
      <metric label="Last 1 Year" :value="140493.86" :change="0.0602" />
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
