<template>
  <div class="metric">
    <div class="metric__label">{{ label }}</div>
    <div class="metric__value">
      <strong>{{ formattedValueIntegerPart }}</strong>
      <span>.{{ formattedValueFractionalPart }}</span>
    </div>
    <div class="metric__change" v-if="change" v-html="formattedChange" />
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
    splitValue() {
      return numeral(this.value)
        .format("$0,0.00")
        .split(".");
    },
    formattedValueIntegerPart() {
      return this.splitValue[0];
    },
    formattedValueFractionalPart() {
      return this.splitValue[1];
    },
    formattedChange() {
      const triangle = this.change > 0 ? "&#9652;" : "&#9662;";
      return `${triangle} ${numeral(this.change).format("0.00%")}`;
    },
  },
};
</script>

<style lang="scss">
.metric {
  font-size: 13px;
  font-weight: bold;
}

.metric__value {
  strong {
    font-size: 20px;
  }

  span {
    font-size: 16px;
  }
}
</style>
