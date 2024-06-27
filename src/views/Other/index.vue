<template>
  <div class="w-1/2 h-1/2">
    <Chart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { Chart } from "@/components";

const options = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};
</script>

<style lang="scss" scoped></style>
