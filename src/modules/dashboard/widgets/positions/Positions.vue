<template>
  <div class="positions">
    <h1>Asset Positions</h1>
    <div class="positions__details">
      <div class="positions__chart">
        <positions-chart />
      </div>
      <div class="positions__items">
        <positions-item
          name="USD"
          color="#606b85"
          :value="140674235"
          :proportion="0.61"
        />
        <positions-item
          name="EUR"
          color="#8ac8bb"
          :value="70456765"
          :proportion="0.27"
        />
        <positions-item
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
import {
  PositionsChart,
  PositionsItem,
} from "./components";

export default {
  components: {
    PositionsChart,
    PositionsItem,
  },
};
</script>

<style lang="scss">
.positions {
  flex: 1;
  padding: 12px;

  border-radius: 6px;
  box-shadow: 0 8px 16px $color-neutral-900;

  h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }
}

.positions__details {
  display: flex;
  margin-bottom: 12px;

  > div {
    flex: 1;
  }
}

.positions__chart {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}

.positions__items {
  margin: 0 20px;
}
</style>
