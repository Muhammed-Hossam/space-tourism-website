import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Destination.vue"),
  },
  {
    path: "/crew",
    name: "Crew",
    component: () => import("../views/Crew.vue"),
  },
  {
    path: "/technology",
    name: "Technology",
    component: () => import("../views/Technology.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
