<template>
  <div class="summary-container">
    <div class="top-part">
      <img
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/jhlaeh7ulojuhpauloj/favicon.ico"
        alt=""
      />
      <div>
        <span>抖音</span>
        <span>电商</span>
      </div>
      <div>数据大屏</div>
    </div>
    <div class="bottom-part">
      <div>
        <span>@小哈哈~~~</span>
        <span class="live-status">已结束</span>
      </div>
      <div>开播平台：抖音</div>
      <div>开播时间：2023/11/10 21:40:42</div>
      <div>直播时间：共直播5小时48分钟</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.summary-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  .top-part {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    div {
      color: #fff;
      font-size: 1.5rem;
    }
    div:nth-of-type(1) {
      span {
        font-size: 1.5rem;
      }
      span:nth-child(2) {
        background-color: #fff;
        color: #000;
        border-radius: 0.5rem;
        padding: 0 0.125rem;
      }
    }
  }
  .bottom-part {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div {
      font-size: 0.875rem;
    }

    div:first-child {
      .live-status {
        border-radius: 0.25rem;
        color: #fff;
        background-color: #93c5fd;
        padding: 0.1rem;
      }
    }
  }
}
</style>
