import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { path: "/", name: "index", component: require("../views/Index.vue").default },
  { path: "/forms", name: "forms", component: require("../views/Forms.vue").default },
  { path: "/alerts", name: "alerts", component: require("../views/Alerts.vue").default },
  { path: "/tables", name: "tables", component: require("../views/Tables.vue").default },
  { path: "/login", name: "login", component: require("../views/Login.vue").default },
  { path: "/register", name: "register", component: require("../views/Register.vue").default }
]

const router = new VueRouter({
  routes,
  mode: "history",
  linkExactActiveClass: "active"
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
