<template>
  <div class="summary">
    <div class="summary__header">
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
.summary__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
