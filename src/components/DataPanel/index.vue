<template>
  <div class="pt-6 rounded-md flex flex-col gap-7">
    <div class="text-slate-300 text-center flex flex-col gap-2">
      <span class="deal-count-title">直播期间累计成交金额（元）：</span>
      <span ref="totalCountTarget" class="text-7xl ml-2 mr-2 font-bold">
        222,341,99
      </span>
    </div>
    <div class="info-container grid grid-cols-5 gap-2">
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
// import CountTo from './CountTo'
</script>

<style lang="scss" scoped>
.deal-count-title {
  text-align: center;
  display: block;
}
.info-container > div {
  text-align: center;
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.25rem;
  & > span:first-child {
    display: block;
  }
  & > span:nth-child(2) {
    color: #fff;
    font-size: 1.25rem;
    line-height: 1.725rem;
  }
}
</style>
