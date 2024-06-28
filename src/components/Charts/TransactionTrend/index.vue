<template>
  <Chart :options="options" hegith />
</template>

<script setup lang="ts" name="TransactionTrend">
import { Chart } from "@/components";

const props = defineProps({
  data: {
    type: Array,
  },
});
const xVal = [
  "19:30",
  "19:31",
  "19:32",
  "19:33",
  "19:34",
  "19:35",
  "19:36",
  "19:37",
  "19:38",
  "19:39",
  "19:40",
  "19:41",
  "19:42",
  "19:43",
  "19:44",
  "19:45",
  "19:46",
  "19:47",
  "19:48",
  "19:49",
  "19:50",
  "19:51",
  "19:52",
  "19:53",
  "19:54",
  "19:55",
  "19:56",
  "19:57",
  "19:58",
  "19:59",
  "20:00",
];
const yVal2 = [
  193, 1132, 1004, 43, 510, 1164, 842, 732, 178, 358, 399, 312, 113, 538, 1076,
  154, 1349, 919, 1438, 823, 1011, 814, 161, 1287, 891, 467, 823, 574, 536, 254,
  1360,
];
const yVal = [
  337, 755, 367, 613, 409, 948, 923, 1174, 1067, 697, 1023, 1022, 698, 1497,
  205, 1354, 328, 1340, 159, 210, 1478, 539, 221, 1403, 618, 150, 1127, 232,
  646, 645,
];

const options = {
  grid: {
    left: 0,
    right: "5%",
    bottom: 0,
    top: "20%",
    containLabel: true,
  },
  legend: {
    left: 0,
    top: 0,
    icon: "circle",
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
    itemHeight: 8,
    itemWidth: 10,
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: xVal,
    axisLabel: {
      fontSize: 10,
      color: "#fff",
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: 10,
      color: "#fff",
      formatter: (value) => {
        return value;
      },
    },
    scale: true,
  },
  series: [
    {
      type: "line",
      name: "成交订单数",
      data: yVal,
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#6363fc",
      },
    },
    {
      type: "line",
      name: "成交订单人数",
      data: yVal2,
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#33FF00",
      },
    },
  ],
};
</script>

<style lang="scss" scoped></style>
