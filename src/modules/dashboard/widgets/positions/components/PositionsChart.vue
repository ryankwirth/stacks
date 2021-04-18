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
  computed: {
    createData() {
      const labels = ["Test", "Test2", "Test3"];
      const dollars = [60, 27, 13];
      const colors = ["#606b85", "#8ac8bb", "#6d6785"];
      return createData(labels, dollars, colors);
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
