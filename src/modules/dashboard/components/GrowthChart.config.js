import numeral from "numeral";
import exports from "@/assets/styles/variables/_exports.scss";

export const createChartData = (labels, dollars, returns) => ({
  labels,
  datasets: [
    {
      type: "line",
      yAxisID: "dollars",
      data: dollars,
      pointRadius: 0,
      borderWidth: 1.5,
      borderColor: exports.colorGreen500,
    },
    {
      type: "bar",
      yAxisID: "returns",
      data: returns,
      backgroundColor: exports.colorNeutral400,
    },
  ],
});

export const createOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0,
  },
  hover: {
    animationDuration: 0,
  },
  responsiveAnimationDuration: 0,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          unit: "month",
        },
        gridLines: {
          color: exports.colorNeutral300,
          zeroLineColor: exports.colorNeutral300,
          drawOnChartArea: false,
          tickMarkLength: 5,
        },
        ticks: {
          padding: 5,
          fontColor: exports.colorNeutral100,
        },
      },
    ],
    yAxes: [
      {
        id: "dollars",
        type: "linear",
        position: "left",
        gridLines: {
          lineWidth: 2,
          color: exports.colorNeutral800,
          zeroLineColor: exports.colorNeutral300,
        },
        ticks: {
          fontColor: exports.colorNeutral100,
          callback: (value) =>
            numeral(value)
              .format("$0.0a")
              .toUpperCase(),
        },
      },
      {
        id: "returns",
        type: "linear",
        position: "right",
        ticks: {
          min: 0,
          max: 0.05,
          fontColor: exports.colorGreen500,
          callback: (value) => numeral(value).format("0.0%"),
        },
      },
    ],
  },
});
