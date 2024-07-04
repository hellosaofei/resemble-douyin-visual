<template>
  <Chart
    :options="options"
    chartID="PopularityTrendChart"
    ref="PopularityTrend"
  />
</template>

<script setup lang="ts" name="PopularityTrend">
import { Chart } from "@/components";
import { ref, onMounted, onUnmounted } from "vue";
import SocketService from "@/utils/socket";

const PopularityTrend = ref();

const options = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    left: "0",
    icon: "circle",
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    itemHeight: 8,
    itemWidth: 8,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
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
    left: "3%",
    right: "5%",
    bottom: "3%",
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
        color: "#776cfb",
      },
    },
    {
      name: "离开直播间人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#f9cf8b",
      },
    },
    {
      name: "实时在线人数",
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#8eeefe",
      },
    },
  ],
};
onMounted(() => {
  SocketService.Instance.registerCallback("PopularityData", getData);
  SocketService.Instance.send({
    action: "getData",
    dataType: "PopularityData",
  });
});
onUnmounted(() => {
  SocketService.Instance.unRegisterCallback("PopularityData", getData);
});

function getData(res: any) {
  // console.log("更新了 PopularityTrend 数据：", res);
  const newOptions = {
    xAxis: {
      data: res["timeAxis"],
    },
    series: [
      {
        data: res["enterNum"],
      },
      {
        data: res["leaveNum"],
      },
      {
        data: res["aliveNum"],
      },
    ],
  };
  PopularityTrend.value.updateChart(newOptions);
}
</script>

<style lang="scss" scoped></style>
