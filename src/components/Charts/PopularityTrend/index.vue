<template>
  <Chart :options="options" />
</template>

<script setup lang="ts" name="PopularityTrend">
import { Chart } from "@/components";
// const props = defineProps({
//   data: {
//     type: Array,
//     required: true,
//   },
// });

const xVal = [
  "11:15",
  "12:30",
  "13:45",
  "15:00",
  "16:15",
  "17:30",
  "18:45",
  "20:00",
  "21:15",
  "22:30",
  "23:45",
];
const generateRandomArray = (length) => {
  if (length <= 0) {
    length = 0;
  }
  length = Math.floor(length);
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (601 - 300)) + 300;
    array.push(randomNum);
  }
  return array;
};
const options = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    left: "0",
    icon: "circle",
    textStyle: {
      color: "#fff",
      fontSize: 8,
    },
    itemHeight: 8,
    itemWidth: 8,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
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
    scale: true,
    axisLabel: {
      fontSize: 10,
      color: "#fff",
      formatter: (value) => {
        return value;
      },
    },
    splitLine: {
      lineStyle: {
        color: "#1e293b",
        opacity: 0.4,
      },
    },
  },
  grid: {
    left: 0,
    right: "5%",
    bottom: 0,
    top: "20%",
    containLabel: true,
  },
  series: [
    {
      name: "进入直播间人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#6363fc",
      },
      data: generateRandomArray(xVal.length),
    },
    {
      name: "离开直播间人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#33FFF00",
      },
      data: generateRandomArray(xVal.length),
    },
    {
      name: "实时在线人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#9933FF",
      },
      data: generateRandomArray(xVal.length),
    },
  ],
};
</script>

<style lang="scss" scoped></style>
