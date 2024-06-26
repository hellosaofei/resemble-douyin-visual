<template>
  <div>
    <div>用户画像</div>
    <div ref="userPortraitRef" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

let chartInstance = null;
const userPortraitRef = ref(null);

onMounted(() => {
  chartInstance = echarts.init(userPortraitRef.value);
  renderChart();
});

const renderChart = () => {
  const options = {
    series: [
      {
        name: "男性",
        type: "pie",
        silent: true,
        clockwise: true,
        center: ["30%", "50%"],
        radius: ["45%", "55%"],
        itemStyle: {
          color: "#465A98",
          borderRadius: 10,
          borderWidth: 2,
        },
        label: {
          position: "center",
          fontSize: 20,
          color: "#fff",
          textStyle: {
            rich: {
              percentage: {
                fontSize: 20,
                color: "#fff",
                fontWeight: "600",
              },
              label: {
                fontSize: 15,
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
              normal: {
                color: "#8124FF",
              },
            },
          },
          {
            value: 100 - props.data[0].value,
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
        center: ["70%", "50%"],
        label: {
          position: "center",
          fontSize: 20,
          color: "#fff",
          textStyle: {
            rich: {
              percentage: {
                fontSize: 20,
                color: "#fff",
                fontWeight: "600",
              },
              label: {
                fontSize: 15,
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
              normal: {
                color: "#ff3272",
              },
            },
          },
          {
            value: 100 - props.data[1].value,
          },
        ],
      },
    ],
  };
  chartInstance.setOption(options);
};

watch(
  () => props.data,
  () => {
    renderChart();
  }
);
</script>

<style lang="scss" scoped></style>
