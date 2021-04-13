import exports from "@/assets/styles/variables/_exports.scss";

export const createData = (labels, dollars) => () => ({
  labels,
  datasets: [
    {
      type: "doughnut",
      yAxisID: "dollars",
      data: dollars,
      pointRadius: 0,
      borderWidth: 1.5,
      backgroundColor: exports.colorGreen500,
    },
  ],
});

export const createOptions = () => () => ({
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
        display: false,
      },
    ],
    yAxes: [
      {
        id: "dollars",
        type: "linear",
        display: false,
      },
    ],
  },
  tooltips: {
    enabled: false,
  },
});
