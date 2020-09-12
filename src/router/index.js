import VueRouter from 'vue-router'
import Home from '../view/Home'
import About from '../view/About'
import Detail from '../view/Detail'
import Archives from '../view/Archives'
import Categories from '../view/Categories'
import CategoryArticle from '../view/CategoryArticle'
import Tags from '../view/Tags'
import TagArticle from '../view/TagArticle'

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
            path:'/Detail',
            name:"Detail",
            component:Detail
        },
        {
            path:'/Archives',
            name:"Archives",
            component:Archives
        },
        {
            path:'/Categories',
            name:"Categories",
            component:Categories
        },
        {
            path:'/CategoryArticle',
            name:"CategoryArticle",
            component:CategoryArticle
        },
        {
            path:'/Tags',
            name:"Tags",
            component:Tags
        },
        {
            path:'/TagArticle',
            name:"TagArticle",
            component:TagArticle
        },
    ]
})
