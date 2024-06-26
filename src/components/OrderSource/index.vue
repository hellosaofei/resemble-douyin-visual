<template>
  <div>
    <div>订单来源</div>
    <div ref="orderSourceRef" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

let chartInstance = null;
const orderSourceRef = ref(null);

onMounted(() => {
  chartInstance = echarts.init(orderSourceRef.value);
  renderChart();
});

const renderChart = () => {
  const options = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      right: "5%",
      top: "center",
      orient: "vertical",
      icon: "circle",

      formatter: function (name) {
        const currVal = props.data.filter((item) => item.name === name)[0]
          .value;
        // return `{name|${name}}{currVal||   ${currVal}}`;
        return `${name} ${currVal}`;
      },
      textStyle: {
        color: "#fff",
        fontSize: 10,
        rich: {},
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        width: "50%",
        radius: ["45%", "55%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        data: props.data,
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
