import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../view/Home'
import About from '../view/About'

export  default new VueRouter({
    routes:[
        {
            path:'/',
            name:"index",
            component:HelloWorld
        },
        {
            path:'/Home',
            name:"Home",
            component:Home
        },
        {
            path:'/About',
            name:"About",
            component:About
        },
    ]
})
