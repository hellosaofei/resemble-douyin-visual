<template>
  <div ref="chartRef" :style="{ height: height, width: width }"></div>
</template>

<script setup lang="ts">
// @types/echarts
import { init } from "echarts";
import { onMounted, onUnmounted, ref, watch } from "vue";

let chartInstance: echarts.ECharts;
let chartRef = ref(null);

let props = defineProps({
  height: {
    type: String,
    default: "calc(100% - 2rem)",
  },
  width: {
    type: String,
    default: "100%",
  },
  options: {
    type: Object,
    require: true,
  },
});

//组件挂载时，初始化图表实例
onMounted(() => {
  initChart();
});
// 在组件卸载时清理图表实例
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
  }
});

const initChart = () => {
  if (!chartRef.value) return;
  chartInstance = init(chartRef.value);
  chartInstance.setOption(props.options);
};

// 监听series数据的变化
watch(
  () => props.options,
  () => {
    chartInstance.setOption(props.options);
  }
);

// 监听窗口变化
window.addEventListener("resize", () => {
  chartInstance.resize();
});
</script>

<style lang="scss" scoped></style>
