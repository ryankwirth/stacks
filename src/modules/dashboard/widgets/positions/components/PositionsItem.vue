<template>
  <div class="positions-item">
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
    formattedValue() {
      return numeral(this.value).format("$0,0");
    },
    formattedReturn() {
      return numeral(this.return).format("0%");
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
