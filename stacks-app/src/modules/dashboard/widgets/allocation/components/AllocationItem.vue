<template>
  <div class="allocation-item">
    <div class="allocation-item__icon" :style="{ background: color }"></div>
    <div class="allocation-item__name">{{ name }}</div>
    <div class="allocation-item__value">{{ formattedValue }}</div>
    <div class="allocation-item__proportion">{{ formattedProportion }}</div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    name: String,
    color: String,
    value: Number,
    proportion: Number,
  },
  computed: {
    formattedValue() {
      return numeral(this.value).format("$0,0");
    },
    formattedProportion() {
      return numeral(this.proportion).format("0%");
    },
  },
};
</script>

<style lang="scss">
.allocation-item {
  display: flex;
  align-items: center;

  padding: 12px 0;

  font-size: 16px;
  font-weight: 500;
}

.allocation-item__icon {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.allocation-item__name {
  flex: 1;
  margin-left: 16px;
}

.allocation-item__proportion {
  margin-left: 24px;
}
</style>
