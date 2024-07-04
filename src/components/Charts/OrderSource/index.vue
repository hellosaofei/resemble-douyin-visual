<template>
  <Chart
    :options="options"
    chartID="OrderSourceChart"
    class="w-full h-full"
    ref="orderSource"
  />
</template>

<script setup lang="ts" name="OrderSource">
import { ref, onMounted, onUnmounted } from "vue";
import { Chart } from "@/components";
import SocketService from "@/utils/socket";

const orderSource = ref();
const options = {
  tooltip: {
    trigger: "item",
  },
  grid: {
    left: "5%",
  },
  legend: {
    right: "20%",
    top: "center",
    orient: "vertical",
    icon: "circle",
    textStyle: {
      color: "#fff",
      fontSize: 14,
    },
    itemHeight: 8,
    itemWidth: 10,
  },
  series: [
    {
      type: "pie",
      left: 0,
      radius: ["45%", "55%"],
      center: ["25%", "50%"],
      padAngle: 8,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: false,
        position: "center",
      },
    },
  ],
};

onMounted(() => {
  SocketService.Instance.registerCallback("orderSourceData", getData);
  SocketService.Instance.send({
    action: "getData",
    dataType: "orderSourceData",
  });
});
onUnmounted(() => {
  SocketService.Instance.unRegisterCallback("orderSourceData", getData);
});

function getData(res: any) {
  // console.log("更新了数据 orderSourceData：", res);
  const newOptions = {
    series: [
      {
        data: res,
      },
    ],
  };
  orderSource.value.updateChart(newOptions);
}
</script>

<style lang="scss" scoped></style>
