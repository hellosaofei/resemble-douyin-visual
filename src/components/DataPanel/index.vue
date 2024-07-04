<template>
  <div class="data-panel-container">
    <div class="top-part">
      <span class="deal-count-title">直播期间累计成交金额（元）：</span>
      <span ref="totalCountTarget" class="deal-count-num">
        <CountTo :end="dataPanel.summaryMoney" />
      </span>
    </div>
    <div class="info-container bottom-part">
      <div>
        <span>成交件数</span>
        <span>{{ dataPanel.transitionNumGoods }}</span>
      </div>
      <div>
        <span>成交人数</span>
        <span>{{ dataPanel.transitionNumPeople }}</span>
      </div>
      <div>
        <span>点击-成交转化率</span>
        <span>{{ dataPanel.conversionRate }}</span>
      </div>
      <div>
        <span>千次观看成交金额</span>
        <span>{{ dataPanel.moneyOfThousandViews }}</span>
      </div>
      <div>
        <span>成交粉丝占比</span>
        <span>{{ dataPanel.fansRate }} %</span>
      </div>
      <div>
        <span>平均在线人数</span>
        <span>{{ dataPanel.averageAliveNum }}</span>
      </div>
      <div>
        <span>累计观看人次</span>
        <span>{{ dataPanel.totalViewNum }} 万</span>
      </div>
      <div>
        <span>新增粉丝团人数</span>
        <span>{{ dataPanel.incrementFansOfGroup }}</span>
      </div>
      <div>
        <span>新增粉丝数量</span>
        <span>{{ dataPanel.incrementFans }}</span>
      </div>
      <div>
        <span>人均观看直播时长</span>
        <span>{{ dataPanel.averageDuration }}秒</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted, reactive } from "vue";
import CountTo from "@/components/CountTo/index.vue";
import SocketService from "@/utils/socket";

const dataPanel = reactive({
  summaryMoney: 4350,
  transitionNumGoods: 98,
  transitionNumPeople: 82,
  conversionRate: 6.98,
  moneyOfThousandViews: 723.43,
  fansRate: 3.88,
  averageAliveNum: 10,
  totalViewNum: 8.4,
  incrementFans: 121,
  incrementFansOfGroup: 456,
  averageDuration: 34,
});
onMounted(() => {
  SocketService.Instance.registerCallback("dataPanelData", getData);
  SocketService.Instance.send({
    action: "getData",
    dataType: "dataPanelData",
  });
});
onUnmounted(() => {
  SocketService.Instance.unRegisterCallback("dataPanelData", getData);
});

function getData(res: any) {
  // console.log("更新了数据 dataPanelData", res);
  Object.keys(res).forEach((item) => {
    dataPanel[item] = res[item];
  });
}
</script>

<style lang="scss" scoped>
.data-panel-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
        // font-size: 0.75rem;
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
