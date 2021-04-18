<template>
  <div class="allocation">
    <h1>Asset Allocation</h1>
    <div class="allocation__details">
      <div class="allocation__chart">
        <allocation-chart />
      </div>
      <div class="allocation__items">
        <allocation-item name="Hello" :value="0.0" :proportion="0.5402" />
        <allocation-item name="Hello" :value="0.0" :proportion="0.5402" />
        <allocation-item name="Hello" :value="0.0" :proportion="0.5402" />
        <allocation-item name="Hello" :value="0.0" :proportion="0.5402" />
      </div>
    </div>
  </div>
</template>

<script>
import { AllocationChart, AllocationItem } from "./components";

export default {
  components: {
    AllocationChart,
    AllocationItem,
  },
};
</script>

<style lang="scss">
.allocation {
  flex: 1;
  padding: 12px;

  border-radius: 6px;
  box-shadow: 0 8px 16px $color-neutral-900;

  h1 {
    font-size: 20px;
  }
}

.allocation__details {
  display: flex;
}

.allocation__chart {
  flex: 1;
}

.allocation__items {
  flex: 1;
}
</style>
