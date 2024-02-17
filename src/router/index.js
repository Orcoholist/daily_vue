import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/day2",
      name: "day2",
      component: () => import("../components/Day2.vue"),
    },
    {
      path: "/day3",
      name: "Day3",
      component: () => import("../components/day-3/Day3.vue"),
    },
    {
      path: "/vOnExample",
      name: "vOnExample",
      component: () => import("../components/day-4/v-on-example/vOnExample.vue"),
    },
    {
      path: "/vBindExample",
      name: "vBindExample",
      component: () => import("../components/day-4/v-bind-example/vBindExample.vue"),
    },
  ],
});

export default router;
