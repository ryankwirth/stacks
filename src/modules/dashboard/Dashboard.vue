<template>
  <div class="dashboard">
    <div class="dashboard__widget">
      <performance />
    </div>
    <div class="dashboard__widget">
      <accounts />
    </div>
    <div class="dashboard__widget">
      <allocation />
      <positions />
    </div>
  </div>
</template>

<script>
import { Accounts, Allocation, Performance, Positions } from "./widgets";

export default {
  components: {
    Accounts,
    Allocation,
    Performance,
    Positions,
  },
};
</script>

<style lang="scss">
.dashboard__widget {
  display: flex;
  gap: 20px;
}
</style>
