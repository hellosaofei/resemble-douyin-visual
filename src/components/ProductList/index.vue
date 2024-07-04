<template>
  <div class="goodlist-container">
    <div class="goodlist-body">
      <!-- 列表标题 -->
      <table class="goodlist-title table-config">
        <thead>
          <tr class="title">
            <th v-for="(item, index) of labelData" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
      </table>
      <!-- 商品列表内容 -->
      <div class="goodlist-content">
        <div class="goodlist" v-if="tableData">
          <table class="table-config">
            <tbody>
              <tr
                v-for="(item, index) in tableData"
                :key="index"
                class="text-xs text-right"
              >
                <td>{{ item.name }}</td>
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
import { onUnmounted, onMounted, ref } from "vue";
import SocketService from "@/utils/socket";

const labelData = ref(null);
const tableData = ref(null);
onMounted(() => {
  SocketService.Instance.registerCallback("productListData", getData);
  SocketService.Instance.send({
    action: "getData",
    dataType: "productListData",
  });
});
onUnmounted(() => {
  SocketService.Instance.unRegisterCallback("productListData", getData);
});

function getData(res: any) {
  // console.log("更新了数据 productListData", res);
  tableData.value = res["tableData"];
  labelData.value = res["labelData"];
}
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
    font-size: 0.875rem;
    th {
      text-align: right;
    }
    th:first-child {
      text-align: left;
      width: 9rem;
    }
  }
}
.goodlist-content {
  overflow: auto;
  tr {
    font-size: 0.875rem;
    height: 4rem;
    border-top: solid rgb(230, 230, 230, 0.5) 1px;
    td {
      text-align: right;
    }
    td:first-child {
      text-align: left;
      width: 9rem;
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
</style>
