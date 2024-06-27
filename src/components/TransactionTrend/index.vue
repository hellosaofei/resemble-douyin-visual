<template>
  <div>
    <div>交易趋势</div>
    <Chart :options="options" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { Chart } from "@/components";

const props = defineProps({
  data: {
    type: Array,
  },
});

const options = {
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"],
    axisLabel: {
      color: "#fff",
      fontSize: 10,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "#fff",
      formatter: function (value) {
        return value;
      },
    },
  },
  grid: {
    left: "5%",
    right: "5%",
    bottom: "3%",
    containLabel: true,
  },
  legend: {
    top: "4%",
    icon: "circle",
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
  },
  series: [
    {
      type: "line",
      name: "直播期间成交订单数",
      data: [820, 932, 900, 934, 1290, 1330, 1320],
      smooth: true,
      showSymbol: false,
    },
    {
      type: "line",
      name: "直播期间成交订单人数",
      data: [820, 932, 901, 920, 1290, 1335, 1315],
      smooth: true,
      showSymbol: false,
    },
  ],
};
</script>

<style lang="scss" scoped></style>
