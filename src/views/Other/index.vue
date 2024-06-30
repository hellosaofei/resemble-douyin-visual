<template>
  <div class="screen-container">
    <div class="screen-body">
      <!-- 左 -->
      <section class="screen-left">
        <div class="left-top chart-container">
          <div class="chart-container-top">
            <span>成交趋势图</span>
          </div>
          <div class="chart-container-bottom">
            <!-- <TransactionTrend /> -->
            <PopularityTrend />
          </div>
        </div>
        <div class="left-middle chart-container">
          <div class="chart-container-top">
            <span>订单来源</span>
          </div>
          <div class="chart-container-bottom">
            <OrderSource :data="orderSourceData" />
          </div>
        </div>
        <div class="left-bottom chart-container">
          <div class="chart-container-top">
            <span>用户画像</span>
          </div>
          <div class="chart-container-bottom">
            <UserPortrait :data="userProtraitData" />
          </div>
        </div>
      </section>
      <!-- 中 -->
      <section class="screen-middle">
        <div class="middle-top">
          <TitleBar />
        </div>
        <div class="middle-middle">
          <DataPanel />
        </div>
        <div class="middle-bottom chart-container">
          <div class="chart-container-top">
            <span>商品列表</span>
          </div>
          <div class="chart-container-bottom">
            <ProductList />
          </div>
        </div>
      </section>
      <!-- 右 -->
      <section class="screen-right">
        <div class="right-top chart-container">
          <div class="chart-container-top">
            <span>人气趋势图</span>
          </div>
          <div class="chart-container-bottom">
            <!-- <PopularityTrend /> -->
            <TransactionTrend />
          </div>
        </div>
        <div class="right-bottom chart-container">
          <div class="chart-container-top">
            <span>实时直播</span>
          </div>
          <div class="chart-container-bottom">
            <RealTimeLive />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RealTimeLive, TitleBar, DataPanel, ProductList } from "@/components";
import {
  OrderSource,
  PopularityTrend,
  TransactionTrend,
  UserPortrait,
} from "@/components/Charts";
const orderSourceData = [
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
];
const userProtraitData = [
  {
    name: "男性",
    value: 18,
  },
  {
    name: "女性",
    value: 82,
  },
];
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.screen-container {
  height: 100%;
  width: 100%;
  padding: 10px 60px;
  color: #fff;
  background: #283354;
}
.screen-body {
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 1rem;
  /*设置一个背景图*/
  // background-position: 0 0, 100% 0;
  // background-repeat: no-repeat;
  // background-size: 100% 100%, 852px 281px;
  // background-image: linear-gradient(
  //     90deg,
  //     rgba(26, 28, 39, 0) 0%,
  //     #1a1c27 calc(100% - 852px),
  //     rgba(32, 32, 53, 0.35) 64.63%,
  //     rgba(33, 33, 57, 0.2) 100%
  //   ),
  //   url(https://s21.ax1x.com/2024/06/30/pkcMl4J.png);
  .screen-left {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    width: 24%;
    .left-top {
      height: 34%;
      position: relative;
    }
    .left-middle {
      height: 30%;
      position: relative;
    }
    .left-bottom {
      flex-grow: 1;
      position: relative;
    }
  }
  .screen-middle {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    flex-grow: 1;
    width: 52%;
    .middle-top {
      flex: 1 1 10%;
      min-height: 10%;
      max-height: 10%;
      position: relative;
    }
    .middle-middle {
      flex: 1 1 42%;
      // min-height: 0;
      // max-height: 42%;
      position: relative;
    }
    .middle-bottom {
      flex: 1 1 48%;
      min-height: 0;
      max-height: 48%;
      // flex-grow: 0;
      position: relative;
      overflow: hidden;
    }
  }
  .screen-right {
    width: 24%;
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    .right-top {
      height: 35%;
      position: relative;
    }
    .right-bottom {
      flex-grow: 1;
      position: relative;
    }
  }
}
</style>
