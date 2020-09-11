import VueRouter from 'vue-router'
import Home from '../view/Home'
import About from '../view/About'
import detail from '../view/detail'
import archives from '../view/archives'

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
        {
            path:'/detail',
            name:"detail",
            component:detail
        },
        {
            path:'/archives',
            name:"archives",
            component:archives
        }
    ]
})
