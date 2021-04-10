<template>
  <div :class="classes">
    <div class="metric__label">{{ label }}</div>
    <div class="metric__value">
      <span>{{ formattedValueIntegerPart }}</span>
      <small>.{{ formattedValueFractionalPart }}</small>
    </div>
    <div class="metric__change" v-if="change" v-html="formattedChange" />
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    label: String,
    value: Number,
    change: Number,
  },
  computed: {
    classes() {
      return ["metric", `metric--${this.changeType}`];
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
.metric {
  font-size: 13px;
  font-weight: 500;
}

.metric--positive {
  .metric__value,
  .metric__change {
    color: $color-green-500;
  }

  .metric__value small {
    color: $color-green-600;
  }
}

.metric--negative {
  .metric__value,
  .metric__change {
    color: $color-red-500;
  }

  .metric__value small {
    color: $color-red-600;
  }
}

.metric--neutral {
  .metric__value small {
    color: $color-neutral-300;
  }
}

.metric__label {
  color: $color-neutral-300;
}

.metric__value {
  span {
    font-size: 20px;
  }

  small {
    font-size: 16px;
  }
}

.metric__change {
  font-weight: bold;
}
</style>
