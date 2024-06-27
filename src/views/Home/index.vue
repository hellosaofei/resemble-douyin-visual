<template>
  <div
    class="bg-[#283354] bg-text-3xl text-white flex pb-2 overflow-hidden h-screen"
  >
    <!-- 左 -->
    <div class="flex-1 p-3 flex flex-col">
      <!-- 成交趋势图 -->
      <TransactionTrend
        class="h-1/3 box-border rounded-lg pb-4 bg-opacity-30 bg-slate-800"
      />
      <!-- 订单来源 -->
      <OrderSource
        :data="orderSourceData"
        class="h-1/3 box-border rounded-lg pb-4 mt-3 bg-opacity-30 bg-slate-800"
      />
      <!-- 用户画像 -->
      <UserPortrait
        :data="userProtraitData"
        class="h-1/3 mt-3 rounded-lg bg-opacity-30 bg-slate-800"
      />
    </div>
    <!-- 中 -->
    <div class="w-1/2 ml-1 mr-1 flex flex-col">
      <!-- 项目标题 -->
      <TitleBar class="h-1/8 p-1 mt-2" />
      <!-- 数据总览图 -->
      <TotalData class="flex-1 bg-opacity-50 bg-[#6b67fa] p-1 mt-2" />
      <!-- 商品列表 -->
      <ProductList class="flex-1 bg-opacity-50 bg-slate-800 mt-2 rounded-lg" />
    </div>
    <!-- 右 -->
    <div class="flex-1 p-3 flex flex-col">
      <!-- 人气趋势 -->
      <PopularityTrend
        class="h-2/5 box-border rounded-lg pb-4 bg-opacity-30 bg-slate-800"
      />
      <!-- 实时直播 -->
      <RealTimeLive
        class="h-3/5 box-border rounded-lg pb-4 mt-3 bg-opacity-30 bg-slate-800"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  OrderSource,
  PopularityTrend,
  ProductList,
  RealTimeLive,
  TitleBar,
  TransactionTrend,
  UserPortrait,
  TotalData,
} from "@/components";

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

<style lang="scss" scoped></style>
