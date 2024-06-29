<template>
  <div class="goodlist-container">
    <div class="goodlist-body">
      <!-- 列表标题 -->
      <table class="goodlist-title table-config">
        <thead>
          <tr class="title">
            <th class="column-name">
              <div>商品名</div>
            </th>
            <th>商品点击人数</th>
            <th>
              <div>成交件数</div>
            </th>
            <th>
              <div>成交金额</div>
            </th>
            <th>
              <div>成交订单量</div>
            </th>
            <th>
              <div>订单付款率</div>
            </th>
          </tr>
        </thead>
      </table>
      <!-- 商品列表内容 -->
      <div class="goodlist-content">
        <div class="goodlist">
          <table class="table-config">
            <tbody>
              <tr
                v-for="(item, index) in tableData"
                :key="index"
                class="text-xs text-right"
              >
                <td class="column-name">{{ item.name }}</td>
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
.goodlist-container {
  height: 100%;
  padding: 4px;
  overflow: hidden;
  & .goodlist-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
.goodlist-title {
  margin: 8px 0;
  tr {
    font-size: 0.7rem;
    th {
      text-align: right;
    }
    th:first-child {
      text-align: left;
    }
  }
}
.goodlist-content {
  overflow: auto;
  tr {
    font-size: 0.75rem;
    height: 4rem;
    border-top: solid rgb(230, 230, 230, 0.5) 1px;
    td {
      text-align: right;
    }
    td:first-child {
      text-align: left;
    }
  }
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
}
.table-config {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
.column-name {
  width: 10rem;
}
</style>
