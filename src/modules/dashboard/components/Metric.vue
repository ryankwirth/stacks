<template>
  <div class="metric">
    <div class="metric__label">{{ label }}</div>
    <div class="metric__value">{{ formattedValue }}</div>
    <div v-if="change" class="metric__change">{{ formattedChange }}</div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    label: String,
    value: Number,
    change: Number,
  },
  computed: {
    formattedValue() {
      return numeral(this.value).format("$0,0.00");
    },
    formattedChange() {
      return numeral(this.change).format("0.00%");
    }
  }
};
</script>

<style>
.metric {
  font-size: 13px;
  font-weight: bold;
}

.metric__value {
  font-size: 20px;
}
</style>
