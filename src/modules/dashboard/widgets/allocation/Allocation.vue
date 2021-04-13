<template>
  <div class="allocation">
    <h1>Asset Allocation</h1>
    <div class="allocation__details">
      <div class="allocation__chart">
        Chart!
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
import AllocationItem from "./components/AllocationItem.vue";

export default {
  components: {
    AllocationItem,
  },
};
</script>

<style lang="scss">
.allocation {
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 8px 16px $color-neutral-900;

  h1 {
    font-size: 20px;
  }
}
</style>
