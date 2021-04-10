<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            id: "A",
            type: "linear",
            position: "left",
          },
          {
            id: "B",
            type: "linear",
            position: "right",
            ticks: {
              max: 10,
              min: 0,
            },
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
