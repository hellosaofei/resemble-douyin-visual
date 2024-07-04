<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
// 引入Socket实例,并与后端建立连接
import SocketService from "@/utils/socket";

onMounted(() => {
  SocketService.Instance.connect();
});
</script>

<style lang="scss" scoped></style>
