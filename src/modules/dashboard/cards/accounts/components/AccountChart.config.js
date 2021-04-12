import exports from "@/assets/styles/variables/_exports.scss";

const createGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 112);
  gradient.addColorStop(0, `${exports.colorGreen500}22`);
  gradient.addColorStop(1, `${exports.colorGreen500}02`);
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
