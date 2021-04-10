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
            ticks: {
              callback: (value) => `$${value}`,
            },
          },
          {
            id: "B",
            type: "linear",
            position: "right",
            ticks: {
              min: 0,
              max: 5,
              callback: (value) => `${value.toFixed(2)}%`,
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
