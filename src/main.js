import "./vendor"

import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/scss/app.scss"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data () {
    return {
      showSidebar: false
    }
  }
}).$mount("#app")
