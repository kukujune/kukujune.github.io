import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/Home-vue.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/components/Contact-vue.vue")
  },
  {
    path: "/side",
    name: "Side Projects",
    component: () => import("@/components/SideProjects-vue.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;