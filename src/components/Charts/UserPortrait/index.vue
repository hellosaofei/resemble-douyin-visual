<template>
  <Chart :options="options" chartID="UserPortraitChart" ref="userPortrait" />
</template>

<script setup lang="ts" name="UserPortrait">
import { Chart } from "@/components";
import { ref, onMounted, onUnmounted } from "vue";
import SocketService from "@/utils/socket";

const userPortrait = ref();
const options = {
  grid: {
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },
  series: [
    {
      name: "男性",
      type: "pie",
      silent: true,
      clockwise: true,
      center: ["30%", "40%"],
      radius: ["45%", "55%"],
      label: {
        position: "center",
        color: "#fff",
        textStyle: {
          rich: {
            percentage: {
              fontSize: 15,
              color: "#fff",
              fontWeight: "600",
            },
            label: {
              fontSize: 12,
              color: "#fff",
            },
          },
        },
      },
    },
    {
      name: "女性",
      type: "pie",
      radius: ["45%", "55%"],
      silent: true,
      clockwise: true,
      startAngle: 90,
      center: ["70%", "40%"],
      label: {
        position: "center",
        color: "#fff",
        textStyle: {
          rich: {
            percentage: {
              fontSize: 15,
              color: "#fff",
              fontWeight: "600",
            },
            label: {
              fontSize: 12,
              color: "#fff",
            },
          },
        },
      },
    },
  ],
};
onMounted(() => {
  SocketService.Instance.registerCallback("userPortraitData", getData);
  SocketService.Instance.send({
    action: "getData",
    dataType: "userPortraitData",
  });
});
onUnmounted(() => {
  SocketService.Instance.unRegisterCallback("userPortraitData", getData);
});

function getData(res: any) {
  // console.log("更新了 portrait 数据：", res);
  const newOptions = {
    series: [
      {
        label: {
          formatter: function () {
            const text_ = `{percentage|${res[0].value}%}\n{label|${res[0].name}}`;
            return text_;
          },
        },
        data: [
          {
            value: res[0].value,
            itemStyle: {
              color: "#9ecce6",
            },
          },
          {
            value: 100 - res[0].value,
            itemStyle: {
              color: "#2e3456",
            },
          },
        ],
      },
      {
        label: {
          formatter: function () {
            const text_ = `{percentage|${res[1].value}%}\n{label|${res[1].name}}`;
            return text_;
          },
        },
        data: [
          {
            value: res[1].value,
            itemStyle: {
              color: "#de7ab5",
            },
          },
          {
            value: 100 - res[1].value,
            itemStyle: {
              color: "#2e3456",
            },
          },
        ],
      },
    ],
  };
  userPortrait.value.updateChart(newOptions);
}
</script>

<style lang="scss" scoped></style>
