<template>
  <div ref="countUpRef"></div>
</template>

<script lang="ts">
import { CountUp } from "countup.js";
import type { CountUpOptions } from "countup.js";
import { onMounted, ref, defineProps, defineExpose } from "vue";
let numAni = ref(null);
let countUpRef = ref("countUpRef");
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
        decimalPlaces: 2, // number类型 小数位，整数自动添.00
        duration: 2, // number类型 动画延迟秒数，默认值是2
        useGrouping: true, // boolean类型  是否开启逗号，默认true(1,000)false(1000)
        useEasing: true, // boolean类型 动画缓动效果(ease),默认true
        smartEasingThreshold: 500, // numberl类型 大于这个数值的值开启平滑缓动
        smartEasingAmount: 300, // numberl类型
        separator: ",", // string 类型 分割用的符号
        decimal: ".", // string 类型  小数分割符合
        prefix: "", // string 类型  数字开头添加固定字符
        suffix: "", // string类型 数字末尾添加固定字符
        numerals: [], // Array类型 替换从0到9对应的字，也就是自定数字字符了,数组存储
      };
      return options;
    },
  },
});
onMounted(() => {
  initCount();
});
const initCount = () => {
  numAni = new CountUp(countUpRef.value, props.end, props.options);
  numAni.start();
};
defineExpose({
  initCount,
});
</script>

<style scoped lang="scss">
#numScroll {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(to right, #3a1c71, #ffaf7b);
  -webkit-background-clip: text; /* Chrome, Safari */
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Chrome, Safari */
  color: transparent;
}
</style>
