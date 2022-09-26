import { createRouter, createWebHistory } from "vue-router";
import type {
  Router,
  RouterOptions,
  RouterHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue"),
  },
];

const history: RouterHistory = createWebHistory(import.meta.env.BASE_URL);

const router: Router = createRouter({ routes, history } as RouterOptions);

export default router;
