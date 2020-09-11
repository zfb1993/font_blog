import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        toggle:false,
        sideBarClass:'',
        containerClass:'',
    },
    mutations:{
        changeToggle(state){
            state.toggle = !state.toggle
            if(state.toggle){
                state.containerClass = 'translate'
                state.sideBarClass = 'show'
            }else{
                state.containerClass = ''
                state.sideBarClass = ''
            }
        }
    }
})

export default store