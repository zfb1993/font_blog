import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import Vuex from 'vuex'
import store from './store/index'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  store,
  router: routes,
  render: h => h(App)
}).$mount('#app')
