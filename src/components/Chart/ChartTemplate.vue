<template>
  <div :id="chartID" :style="{ height: height, width: width }"></div>
</template>

<script setup lang="ts">
// @types/echarts
import { init } from "echarts";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { debounce } from "@/utils";

let chartInstance: echarts.ECharts;

let props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
  width: {
    type: String,
    default: "100%",
  },
  options: {
    type: Object,
    require: true,
  },
  chartID: {
    type: String,
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
  // if (!chartRef.value) return;
  // @ts-ignore
  const areaDOM = document.querySelector(`#${props.chartID}`);
  chartInstance = init(areaDOM);
  chartInstance.setOption(props.options);
};

const updateChart = (options: any) => {
  chartInstance.setOption(options);
};
// 监听series数据的变化
watch(
  () => props.options,
  () => {
    chartInstance.setOption(props.options);
  }
);

// 监听窗口变化
window.addEventListener(
  "resize",
  debounce(() => {
    chartInstance.resize();
  }, 200)
);
defineExpose({
  updateChart,
});
</script>

<style lang="scss" scoped></style>
