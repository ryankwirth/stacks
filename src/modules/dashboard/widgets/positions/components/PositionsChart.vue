<template>
  <bar-chart
    :create-data="createData"
    :create-options="createOptions"
    :style="styles"
    :width="100"
  />
</template>

<script>
import BarChart from "@/common/components/BarChart.vue";
import { createData, createOptions } from "./PositionsChart.config";

export default {
  components: {
    BarChart,
  },
  props: {
    positions: Array,
  },
  computed: {
    createData() {
      return createData(this.positions);
    },
    createOptions() {
      return createOptions();
    },
    styles() {
      return {
        width: "100%",
        height: "224px",
      };
    },
  },
};
</script>
