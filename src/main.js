import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import api from './axios/http'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = api

new Vue({
  store,
  router: routes,
  render: h => h(App)
}).$mount('#app')
