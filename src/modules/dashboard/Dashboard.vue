<template>
  <div class="dashboard">
    <div class="dashboard__header">
      <metrics />
      <range-selector />
    </div>
    <growth-chart />
  </div>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue";
import Metrics from "./components/Metrics.vue";
import RangeSelector from "./components/RangeSelector.vue";

export default {
  components: {
    GrowthChart,
    Metrics,
    RangeSelector,
  },
};
</script>

<style>
.dashboard__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
