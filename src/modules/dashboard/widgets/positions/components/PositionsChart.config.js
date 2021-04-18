export const createData = (positions) => () => ({
  labels: positions.map((position) => position.name),
  datasets: [
    {
      type: "bar",
      data: positions.map((position) => position.return),
      backgroundColor: positions.map((position) => position.color),
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
