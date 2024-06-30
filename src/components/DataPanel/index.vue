<template>
  <div class="data-panel-container">
    <div class="top-part">
      <span class="deal-count-title">直播期间累计成交金额（元）：</span>
      <span ref="totalCountTarget" class="deal-count-num">
        <CountTo :end="endVal" />
      </span>
    </div>
    <div class="info-container bottom-part">
      <div>
        <span>成交件数</span>
        <span ref="city1">686</span>
      </div>
      <div>
        <span>成交人数</span>
        <span ref="city2">450</span>
      </div>
      <div>
        <span>点击-成交转化率</span>
        <span ref="city3">6.1%</span>
      </div>
      <div>
        <span>千次观看成交金额</span>
        <span ref="city4">3080.99</span>
      </div>
      <div>
        <span>成交粉丝占比</span>
        <span ref="city5">24.67%</span>
      </div>
      <div>
        <span>平均在线人数</span>
        <span ref="city6">236</span>
      </div>
      <div>
        <span>累计观看人次</span>
        <span ref="city7">8.29万</span>
      </div>
      <div>
        <span>新增粉丝团人数</span>
        <span ref="city8">11</span>
      </div>
      <div>
        <span>新增粉丝数量</span>
        <span ref="city9">987</span>
      </div>
      <div>
        <span>人均观看直播时长</span>
        <span ref="city10">29秒</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";
import CountTo from "@/components/CountTo/index.vue";
import { generateRandomInt } from "@/utils/index";

const endVal = ref(22234199);

let timer: any;
onMounted(() => {
  timer = setInterval(() => {
    endVal.value += generateRandomInt(1, 100);
  }, 5000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scoped>
.data-panel-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  background-color: rgba(107, 103, 250, 0.5);
  // 渐变色
  // background: linear-gradient(
  //   to right,
  //   #5b66f9,
  //   #6b31ef
  // );

  border-radius: 10px;
  padding: 0.75rem 0;
  & .top-part {
    text-align: center;
    display: flex;
    flex-direction: column;
    column-gap: 0.5rem;
    color: #fff;
  }

  & .bottom-part {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    & > div {
      text-align: center;
      color: #94a3b8;
      font-size: 0.875rem;
      line-height: 1.25rem;
      & > span:first-child {
        display: block;
        color: #fff;
        font-size: 0.75rem;
      }
      & > span:nth-child(2) {
        color: #fff;
        font-size: 1.25rem;
        line-height: 1.725rem;
      }
    }
  }
}
.deal-count-title {
  text-align: center;
  display: block;
}
.deal-count-num {
  margin: 0.5rem;
  font-weight: 700;
  font-size: 4rem;
}
</style>
