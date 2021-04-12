<template>
  <div class="accounts">
    <h1>Your Accounts</h1>
    <div class="accounts__list">
      <account
        name="Dolfin"
        description="Co-Owner 75% | VP Bank"
        :value="300780000.76"
        :change="0.2242"
      />
      <account
        name="Castle"
        description="Owner | UBS Group AG"
        :value="765346978.85"
        :change="0.0726"
      />
      <account
        name="Mermaid"
        description="Co-Owner 50% | VP Bank"
        :value="12728000.56"
        :change="-0.1467"
      />
    </div>
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

<style lang="scss">
.accounts h1 {
  font-size: 20px;
}

.accounts__list {
  display: flex;
}
</style>
