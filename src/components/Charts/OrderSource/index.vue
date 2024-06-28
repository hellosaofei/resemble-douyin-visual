<template>
  <Chart :options="options" class="w-full h-full" />
</template>

<script setup lang="ts" name="OrderSource">
import { Chart } from "@/components";
import { progressProps } from "element-plus";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const options = {
  tooltip: {
    trigger: "item",
  },
  grid: {
    left: "5%",
  },
  legend: {
    right: "5%",
    top: "center",
    orient: "vertical",
    icon: "circle",
    formatter: function (name) {
      const currVal = props.data.filter((item) => item.name === name)[0].value;
      // return `{name|${name}}{currVal||   ${currVal}}`;
      return `${name} ${currVal}`;
    },
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
    itemHeight: 8,
    itemWidth: 10,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      left: 0,
      // width: "50%",
      radius: ["45%", "50%"],
      center: ["25%", "50%"],
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: false,
        position: "center",
      },
      data: props.data,
    },
  ],
};
</script>

<style lang="scss" scoped></style>
