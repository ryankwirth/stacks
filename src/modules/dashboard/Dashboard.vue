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
      <allocation />
    </div>
  </div>
</template>

<script>
import { Accounts, Allocation, Performance } from "./widgets";

export default {
  components: {
    Accounts,
    Allocation,
    Performance,
  },
};
</script>

<style lang="scss">
.dashboard__widget {
  display: flex;
}
</style>
