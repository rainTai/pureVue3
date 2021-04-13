import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import test from "../views/test.jsx";
const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: test,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
