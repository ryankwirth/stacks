<template>
  <div class="metrics">
    <metric label="All Over Value" :value="2341558.76" />
    <metric label="Return" :value="1217610.16" :change="0.521" />
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

<style>
.metrics {
  display: flex;
}
</style>
