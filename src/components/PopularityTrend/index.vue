<template>
  <div>
    <div>用户画像</div>
    <Chart :options="options" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
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
  left: "5%",
  tooltip: {
    trigger: "axis",
  },
  legend: {
    top: "4%",
    left: "0",
    icon: "circle",
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: xVal,
  },
  yAxis: {
    type: "value",
    axisPointer: {
      snap: true,
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  series: [
    {
      name: "进入直播间人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      data: generateRandomArray(xVal.length),
    },
    {
      name: "离开直播间人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      data: generateRandomArray(xVal.length),
    },
    {
      name: "实时在线人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      data: generateRandomArray(xVal.length),
    },
  ],
};
</script>

<style lang="scss" scoped></style>
