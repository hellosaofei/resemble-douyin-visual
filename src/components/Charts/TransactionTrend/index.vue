<template>
  <Chart
    :options="options"
    chartID="TransactionTrendChart"
    ref="TransactionTrend"
  />
</template>

<script setup lang="ts" name="TransactionTrend">
import { Chart } from "@/components";
import { ref, onMounted, onUnmounted } from "vue";
import SocketService from "@/utils/socket";

const TransactionTrend = ref();

const options = {
  grid: {
    left: "3%",
    right: "5%",
    bottom: "3%",
    top: "20%",
    containLabel: true,
  },
  legend: {
    left: 0,
    top: 0,
    icon: "circle",
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    itemHeight: 8,
    itemWidth: 10,
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
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
    splitLine: {
      lineStyle: {
        color: "#1e293b",
        opacity: 0.5,
      },
    },
  },
  series: [
    {
      type: "line",
      name: "成交订单数",
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
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      lineStyle: {
        color: "#33FF00",
      },
    },
  ],
};
onMounted(() => {
  // transactionTrendData
  SocketService.Instance.registerCallback("transactionTrendData", getData);
  SocketService.Instance.send({
    action: "getData",
    dataType: "transactionTrendData",
  });
});
onUnmounted(() => {
  SocketService.Instance.unRegisterCallback("transactionTrendData", getData);
});

function getData(res: any) {
  // console.log("更新了 TransactionTrend 数据：", res);
  const newOptions = {
    xAxis: {
      data: res["timeAxis"],
    },
    series: [
      {
        data: res["transitionNumGoods"],
      },
      {
        data: res["transitionNumPeople"],
      },
    ],
  };
  TransactionTrend.value.updateChart(newOptions);
}
</script>

<style lang="scss" scoped></style>
