<template>
  <div ref="countUpRef"></div>
</template>

<script lang="ts" setup>
import { CountUp } from "countup.js";
import type { CountUpOptions } from "countup.js";
import { onMounted, ref, watch } from "vue";
// 声明 countUp实例对象、DOM元素
let countUpInstance: any;
let countUpRef = ref(null) as any;

// 定义要接收的数据
const props = defineProps({
  end: {
    type: Number,
    default: 0,
  },
  options: {
    type: Object,
    default() {
      let options: CountUpOptions = {
        startVal: 0, // 开始的数字  一般设置0开始
        decimalPlaces: 0, // 整数后的小数位
        duration: 3, // 动画持续秒数
        useGrouping: true, // 是否开启千分位分割
        useEasing: true, // 动画缓动效果
        smartEasingThreshold: 500, // 大于Threshold的值开启平滑缓动
        smartEasingAmount: 300, // 【Threshold，Threshold+Amount】区间内的值，为平滑缓动
        separator: ",", // 千分位分割
        decimal: ".", // 小数分割符
        prefix: "", //  数字开头字符
        suffix: "", // 数字末尾字符
        numerals: [], // Array类型 替换从0到9对应的字，也就是自定数字字符了,数组存储
      };
      return options;
    },
  },
});
onMounted(() => {
  initCount();
});
// 监听endVal值的变化，并完成更新
watch(
  () => props.end,
  (newVal) => countUpInstance.update(newVal)
);
const initCount = () => {
  countUpInstance = new CountUp(countUpRef.value, props.end, props.options);
  countUpInstance.start();
};
// 向父组件暴露 初始化方法
defineExpose({
  initCount,
});
</script>
