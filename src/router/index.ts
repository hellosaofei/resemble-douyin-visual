import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/Home/index.vue";
import OtherView from "@/views/Other/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/other",
    component: OtherView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
