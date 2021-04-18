<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    createData: Function,
    createOptions: Function,
  },
  mounted() {
    const ctx = this.$refs.canvas.getContext("2d");
    const data = this.createData(ctx);
    const options = this.createOptions(ctx);
    this.renderChart(data, options);
  },
};
</script>
