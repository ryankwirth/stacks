<template>
  <div class="performance">
    <div class="performance__header">
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

<style lang="scss">
.performance {
  padding: 16px 12px;
  border-radius: 6px;
  box-shadow: 0 8px 16px $color-neutral-900;
}

.performance__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
