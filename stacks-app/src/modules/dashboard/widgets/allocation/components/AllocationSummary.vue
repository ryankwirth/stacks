<template>
  <div class="allocation-summary" :style="{ color }">
    <span>{{ formattedValue }}</span>
    <small>{{ name }}</small>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    name: String,
    color: String,
    value: Number,
  },
  computed: {
    formattedValue() {
      return numeral(this.value)
        .format("$0a")
        .toUpperCase();
    },
  },
};
</script>

<style lang="scss">
.allocation-summary {
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;

  span {
    font-size: 32px;
  }

  small {
    opacity: 0.5;
    font-size: 12px;
  }
}
</style>
