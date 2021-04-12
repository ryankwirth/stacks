<template>
  <div class="accounts">
    Your Accounts
    <account />
  </div>
</template>

<script>
import Account from "./components/Account.vue";

export default {
  components: {
    Account,
  },
};
</script>
