<template>
  <div class="account">
    <div class="account__details">
      <h1>{{ name }}</h1>
      <h2>{{ description }}</h2>
    </div>
    <div class="account_chart">
      <account-chart />
    </div>
  </div>
</template>

<script>
import AccountChart from "./AccountChart.vue";

export default {
  components: {
    AccountChart,
  },
  props: {
    name: String,
    description: String,
    value: Number,
    change: Number,
  },
};
</script>

<style lang="scss">
.account {
  display: flex;
  background: $color-neutral-700;
}

.account_details {

}
</style>
