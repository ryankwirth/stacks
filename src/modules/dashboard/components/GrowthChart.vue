<script>
import Numeral from "numeral";
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
              callback: (value) => Numeral(value).format("$0a").toUpperCase(),
            },
          },
          {
            id: "B",
            type: "linear",
            position: "right",
            ticks: {
              min: 0,
              max: 0.05,
              callback: (value) => Numeral(value).format("0.00%"),
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
