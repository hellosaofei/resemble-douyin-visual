<template>
  <div>
    <div>交易趋势</div>
    <div ref="transactionTrendRef" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  data: {
    type: Array,
  },
});

let chartInstance = null;
const transactionTrendRef = ref(null);

onMounted(() => {
  chartInstance = echarts.init(transactionTrendRef.value);
  renderChart();
});

const renderChart = () => {
  const options = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };
  chartInstance.setOption(options);
};

watch(
  () => props.data,
  () => {
    renderChart();
  }
);
</script>

<style lang="scss" scoped></style>
