import exports from "@/assets/styles/variables/_exports.scss";

export const createData = (labels, dollars) => () => ({
  labels,
  datasets: [
    {
      type: "doughnut",
      data: dollars,
      borderWidth: 3,
      borderColor: exports.colorNeutral800,
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
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
  cutoutPercentage: 85,
});
