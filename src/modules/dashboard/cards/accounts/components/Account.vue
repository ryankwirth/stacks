<template>
  <div :class="classes">
    <div class="account__details">
      <div class="account__name">{{ name }}</div>
      <div class="account__description">{{ description }}</div>
      <div class="account__value">
        <span>{{ formattedValueIntegerPart }}</span>
        <small>.{{ formattedValueFractionalPart }}</small>
      </div>
      <div class="account__change" v-html="formattedChange" />
    </div>
    <div class="account_chart">
      <account-chart />
    </div>
  </div>
</template>

<script>
import numeral from "numeral";
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
  computed: {
    classes() {
      return ["account", `account--${this.changeType}`];
    },
    changeType() {
      if (this.change > 0) {
        return "positive";
      } else if (this.change < 0) {
        return "negative";
      } else {
        return "neutral";
      }
    },
    splitValue() {
      return numeral(this.value)
        .format("$0,0.00")
        .split(".");
    },
    formattedValueIntegerPart() {
      return this.splitValue[0];
    },
    formattedValueFractionalPart() {
      return this.splitValue[1];
    },
    formattedChange() {
      const triangle = this.change >= 0 ? "&#9652;" : "&#9662;";
      return `${triangle} ${numeral(this.change).format("0.00%")}`;
    },
  },
};
</script>

<style lang="scss">
.account {
  display: flex;
  flex: 1;

  font-size: 17.5px;
  font-weight: bold;

  border-radius: 6px;
  background: $color-neutral-700;
}

.account--positive .account__change {
  color: $color-green-500;
}

.account--negative .account__change {
  color: $color-red-500;
}

.account__details {
  flex: 1;
  margin: 18px;
}

.account__description {
  margin-top: 6px;

  font-weight: 500;
  font-size: 15.5px;
  color: $color-neutral-300;
}

.account__value {
  margin-top: 16px;

  small {
    font-size: 15.5px;
    color: $color-neutral-300;
  }
}

.account__change {
  margin-top: 12px;
  margin-left: 10px;
}

.account__chart {
  flex: 1;
}
</style>
