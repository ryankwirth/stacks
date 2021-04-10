import numeral from "numeral";

export const createOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
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
          color: "#676771",
          zeroLineColor: "#676771",
          drawOnChartArea: false,
          tickMarkLength: 5,
        },
        ticks: {
          padding: 5,
          fontColor: "#fff",
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
          color: "#1b1c1e",
          zeroLineColor: "#676771",
        },
        ticks: {
          fontColor: "#fff",
          callback: (value) =>
            numeral(value)
              .format("$0.0a")
              .toUpperCase(),
        },
      },
      {
        id: "return",
        type: "linear",
        position: "right",
        ticks: {
          min: 0,
          max: 0.05,
          fontColor: "#00dd6a",
          callback: (value) => numeral(value).format("0.0%"),
        },
      },
    ],
  },
});
