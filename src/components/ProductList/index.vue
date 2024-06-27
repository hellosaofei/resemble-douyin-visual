<template>
  <div class="px-4 py-1 overflow-hidden">
    <div>商品列表</div>

    <div class="flex flex-col max-h-full">
      <!-- 列表标题 -->
      <table class="dashboard-table m-2">
        <thead>
          <tr class="text-xs">
            <th class="goodname-th w-28 text-left">
              <div>商品名</div>
            </th>
            <th class="text-right">
              <div>商品点击人数</div>
            </th>
            <th class="text-right">
              <div>成交件数</div>
            </th>
            <th class="text-right">
              <div>成交金额</div>
            </th>
            <th class="text-right">
              <div>成交订单量</div>
            </th>
            <th class="text-right">
              <div>订单付款率</div>
            </th>
          </tr>
        </thead>
      </table>
      <!-- 商品列表内容 -->
      <div class="goodlist-container">
        <div class="goodlist">
          <table class="dashboard-table">
            <tbody>
              <tr
                v-for="(item, index) in tableData"
                :key="index"
                class="text-xs text-right"
              >
                <td class="w-28">{{ item.name }}</td>
                <td>{{ item.accessNumber }}</td>
                <td>{{ item.dealNum }}</td>
                <td>{{ item.dealFund }}</td>
                <td>{{ item.realDeal }}</td>
                <td>{{ item.payRate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ProductList">
const labelData = [
  "商品",
  "商品名",
  "商品点击人数",
  "成交件数",
  "成交金额",
  "成交订单量",
  "订单付款率",
  "实际库存消耗",
];
const tableData = [
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 23414,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 23414,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 234,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 23414,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 23414,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 23414,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 23414,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
  {
    good: "hahha",
    name: "花草小号散箱花草小号散箱花草小号散箱",
    accessNumber: 23413,
    dealNum: 23414,
    dealFund: "￥8,212,213",
    realDeal: "32,389",
    payRate: "32.8%",
    store: "32,131",
  },
];
</script>

<style lang="scss">
.dashboard-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
.goodlist-container {
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #454454;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #232e48;
  }
  // &::-webkit-scrollbar-track-piece {
  //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  //   border-radius: 8px;
  //   background-color: #f5f5f5;
  // }
}

.goodlist {
  & tr {
    height: 4rem;
    border-top: solid #eee 1px;
  }
}
</style>
