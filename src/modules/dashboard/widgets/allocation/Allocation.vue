<template>
  <div class="allocation">
    <h1>Asset Allocation</h1>
    <div class="allocation__details">
      <div class="allocation__chart">
        <allocation-chart />
      </div>
      <div class="allocation__items">
        <allocation-item
          name="USD"
          color="#606b85"
          :value="140674235"
          :proportion="0.61"
        />
        <allocation-item
          name="EUR"
          color="#8ac8bb"
          :value="70456765"
          :proportion="0.27"
        />
        <allocation-item
          name="RUB"
          color="#6d6785"
          :value="23400564"
          :proportion="0.12"
        />
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
    margin-bottom: 24px;
  }
}

.allocation__details {
  display: flex;
  margin-bottom: 12px;

  > div {
    flex: 1;
  }
}

.allocation__chart {
  display: flex;
  align-items: center;
  justify-content: center;
}

.allocation__items {
  margin: 0 20px;
}
</style>
