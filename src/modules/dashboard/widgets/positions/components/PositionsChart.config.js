import exports from "@/assets/styles/variables/_exports.scss";

export const createData = (labels, dollars, colors) => () => ({
  labels,
  datasets: [
    {
      type: "bar",
      data: dollars,
      borderWidth: 2.5,
      borderColor: exports.colorNeutral800,
      backgroundColor: colors,
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
  cutoutPercentage: 83,
});
