import Vuex from 'vuex'
import Vue from 'vue'
import api from '../axios/http'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        toggle:false,
        sideBarClass:'',
        containerClass:'',
        Tags:[],
        Categories:[],
        ArticleList:null,
        ArticleDetail:null,
        Archives:null,
        CategoryCount:null,
        SearchData:null
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
        },
        SetArticleList(state, list){
            state.ArticleList = list
        },
        SetArticleDetail(state,detail){
            state.ArticleDetail = detail
        },
        SetArchives(state,list){
            state.Archives = list
        },
        SetCategoryCount(state,count){
            state.CategoryCount = count
        },
        SetSearchData(state,data){
            state.SearchData = data
        }
    },
    actions: {
        AcInit({state}) {
            if (state.Tags.length == 0){
                api.allTags().then(res=>{
                    state.Tags = res.data
                })
            }
            if (state.Categories.length == 0){
                api.allCategories().then(res=>{
                    state.Categories = res.data
                })
            }
            if(!state.ArticleList){
                api.getArticles().then(res=>{
                    state.ArticleList = res.data
                })
            }
        }
    },
})

export default store