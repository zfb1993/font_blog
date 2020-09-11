import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        toggle:false
    },
    mutations:{
        changeToggle(state){
            state.toggle = !state.toggle
        }
    }
})

export default store