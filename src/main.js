import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import api from './axios/http'
import VueMarkdown from 'vue-markdown'
import myLoading from './components/loading'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueMarkdown)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = api
Vue.use(myLoading,{
  icon:require('./assets/img/avatar.jpg'),
  progressColor:'blue' 
})

new Vue({
  store,
  router: routes,
  render: h => h(App)
}).$mount('#app')
