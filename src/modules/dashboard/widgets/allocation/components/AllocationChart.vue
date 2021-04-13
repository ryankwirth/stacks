<template>
  <doughnut-chart
    :create-data="createData"
    :create-options="createOptions"
    :style="styles"
    :width="100"
  />
</template>

<script>
import DoughnutChart from "@/common/components/DoughnutChart.vue";
import { createData, createOptions } from "./AllocationChart.config";

export default {
  components: {
    DoughnutChart,
  },
  computed: {
    createData() {
      const labels = ["Test", "Test2", "Test3"];
      const dollars = [1, 2, 3];
      return createData(labels, dollars);
    },
    createOptions() {
      return createOptions();
    },
    styles() {
      return {
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "-2px",
        height: "114px",
      };
    },
  },
};
</script>
