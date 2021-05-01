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
import { GrowthChart, Metrics, RangeSelector } from "./components";

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
  flex: 1;
  padding: 12px;

  border-radius: 6px;
  box-shadow: 0 8px 16px $color-neutral-900;
}

.performance__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
