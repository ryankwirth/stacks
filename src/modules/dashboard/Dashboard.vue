<template>
  <div class="dashboard">
    <performance />
    <accounts />
  </div>
</template>

<script>
import { Accounts, Performance } from "./cards";

export default {
  components: {
    Performance,
    Accounts,
  },
};
</script>
