<template>
  <div :class="classes">
    <div class="positions-item__icon" :style="{ background: color }"></div>
    <div class="positions-item__name">{{ name }}</div>
    <div class="positions-item__value">{{ formattedValue }}</div>
    <div class="positions-item__return">{{ formattedReturn }}</div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    name: String,
    color: String,
    value: Number,
    return: Number,
  },
  computed: {
    classes() {
      return ["positions-item", `positions-item--${this.returnType}`];
    },
    returnType() {
      if (this.return > 0) {
        return "positive";
      } else if (this.return < 0) {
        return "negative";
      } else {
        return "neutral";
      }
    },
    formattedValue() {
      return numeral(this.value).format("$0,0");
    },
    formattedReturn() {
      return numeral(this.return).format("+0.0%");
    },
  },
};
</script>

<style lang="scss">
.positions-item {
  display: flex;
  align-items: center;

  padding: 12px 0;

  font-size: 16px;
  font-weight: 500;
}

.positions-item--positive {
  .positions-item__value,
  .positions-item__return {
    color: $color-green-500;
  }
}

.positions-item--negative {
  .positions-item__value,
  .positions-item__return {
    color: $color-red-500;
  }
}

.positions-item__icon {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.positions-item__name {
  flex: 1;
  margin-left: 16px;
}

.positions-item__return {
  margin-left: 24px;
}
</style>
