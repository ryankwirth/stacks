<template>
  <div class="dashboard">
    <performance />
    <accounts />
    <allocation />
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
