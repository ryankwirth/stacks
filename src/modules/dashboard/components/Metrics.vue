<template>
  <div class="metrics">
    <metric label="Total Value" :value="2341558.76" />
    <div class="metrics__divider" />
    <metric label="Return" :value="1217610.16" :change="0.521" />
    <div class="metrics__divider" />
    <metric label="Last 1 Year" :value="140493.86" :change="0.0602" />
  </div>
</template>

<script>
import Metric from "./Metric.vue";

export default {
  components: {
    Metric,
  },
};
</script>

<style lang="scss">
.metrics {
  display: flex;
}

.metrics__divider {
  align-self: center;
  margin: 0 36px;

  width: 1px;
  height: 24px;
  background: $color-neutral-400;
}
</style>
