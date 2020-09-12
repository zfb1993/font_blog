import VueRouter from 'vue-router'
import Home from '../view/Home'
import About from '../view/About'
import detail from '../view/detail'
import archives from '../view/archives'
import categories from '../view/categories'
import categoryArticle from '../view/categoryArticle'

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
        },
        {
            path:'/categories',
            name:"categories",
            component:categories
        },
        {
            path:'/categoryArticle',
            name:"categoryArticle",
            component:categoryArticle
        },
    ]
})
