<script>
import { Line, mixins } from "vue-chartjs";
import { createOptions } from "./GrowthChart.config";

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData, createOptions());
  },
};
</script>
