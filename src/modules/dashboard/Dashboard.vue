<template>
  <div class="dashboard">
    <performance />
    <accounts />
  </div>
</template>

<script>
import { Accounts, Performance } from "./widgets";

export default {
  components: {
    Performance,
    Accounts,
  },
};
</script>
