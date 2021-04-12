import exports from "@/assets/styles/variables/_exports.scss";

const createGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, `${exports.colorGreen500}0a`);
  gradient.addColorStop(1, `${exports.colorGreen500}04`);
  return gradient;
};

export const createData = (labels, dollars) => (ctx) => ({
  labels,
  datasets: [
    {
      type: "line",
      yAxisID: "dollars",
      data: dollars,
      pointRadius: 0,
      borderWidth: 1.5,
      borderColor: exports.colorGreen500,
      backgroundColor: createGradient(ctx),
    },
  ],
});

export const createOptions = () => () => ({
  //responsive: true,
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
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        id: "dollars",
        type: "linear",
        position: "left",
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
});
