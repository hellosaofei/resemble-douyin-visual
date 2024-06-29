<template>
  <Chart :options="options" chartID="UserPortraitChart" />
</template>

<script setup lang="ts" name="UserPortrait">
import { Chart } from "@/components";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

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
      itemStyle: {
        color: "#465A98",
        borderRadius: 10,
        borderWidth: 2,
      },
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
        formatter: function () {
          const text_ = `{percentage|${props.data[0].value}%}\n{label|${props.data[0].name}}`;
          return text_;
        },
      },
      data: [
        {
          value: props.data[0].value,
          itemStyle: {
            color: "#8124FF",
          },
        },
        {
          value: 100 - props.data[0].value,
          itemStyle: {
            color: "#263557",
          },
        },
      ],
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
        formatter: function () {
          const text_ = `{percentage|${props.data[1].value}%}\n{label|${props.data[1].name}}`;
          return text_;
        },
      },
      itemStyle: {
        borderRadius: 10,
        borderWidth: 2,
      },
      data: [
        {
          value: props.data[1].value,
          itemStyle: {
            color: "#ff3272",
          },
        },
        {
          value: 100 - props.data[1].value,
          itemStyle: {
            color: "#263557",
          },
        },
      ],
    },
  ],
};
</script>

<style lang="scss" scoped></style>
