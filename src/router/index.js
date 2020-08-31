import VueRouter from 'vue-router'
import Home from '../view/Home'
import About from '../view/About'

export  default new VueRouter({
    routes:[
        {
            path:'*',
            name:"Home",
            component:Home
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
