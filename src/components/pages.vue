<template>
    <div class="page" v-if="pageConfig.totalPage >= 1">
        <a v-if="pageConfig.currentPage > 1" href="javascript:void(0)"> 上一页</a>
        <a href="javascript:void(0)" v-if="firstShow">1</a>
        <a class="pointer" v-if="beforeShow">…</a>
        <a :class="item.class" href="javascript:void(0)" v-for="(item,index) in pageList" :key="index">
            {{item.page}}
        </a>
        <a class="pointer" v-if="afterShow">…</a>
        <a href="javascript:void(0)"  v-if="lastShow">{{pageConfig.totalPage}}</a>
        <a v-if="pageConfig.currentPage < pageConfig.totalPage" href="javascript:void(0)">下一页</a>
    </div>
</template>

<script>
export default {
    props:{
        pageConfig:{
            type: Object,
            default: function(){
                return {
                    pageSize: 10,     //一页的数据条数
                    currentPage: 1,        //当前页的索引
                    totalPage: 1      //总的页数
                }
            }
        }
    },
    name:'page',
    data(){
        return {
            pageList:[],
            beforeShow: true,
            afterShow: true,
            firstShow: true,
            lastShow: true,
        }
    },
    mounted:function(){
            let begin = this.pageConfig.currentPage -2
            let end = this.pageConfig.currentPage + 2 
            let obj = null
            for (begin;begin <= end; begin++){
                if(begin > 0 && begin <= this.pageConfig.totalPage){
                    if(begin ==  1){
                        this.firstShow = false
                    }
                    if(begin ==  2 || this.pageConfig.totalPage == 1){
                        this.beforeShow = false
                    }
                    if(begin == this.pageConfig.totalPage-1 || this.pageConfig.totalPage == 1 ){
                        this.afterShow = false
                    }
                    if(begin == this.pageConfig.totalPage){
                        this.lastShow = false
                    }
                    if(begin == this.pageConfig.currentPage){
                        obj = {page:begin,class:'current pointer'}
                    }else{
                        obj = {page:begin,class:''}
                    }
                    this.pageList.push(obj)
                }
            }
            console.log(this.pageList)
    }
}
</script>

<style lang="scss" scoped>
    .page{
        padding: 20px 40px;
        margin-bottom: 40px;
        background-color: rgba(0, 0, 0, 0.5);
        text-align: left;
        font-size: 14px;
        letter-spacing: 1px;
        a{
            display: inline-block;
            margin-left: 5px;
            text-align: center;
            padding-bottom: 5px;
            min-width: 15px;
            &:hover{
                color: #0F9FB4;
                border-bottom: 1px solid #0F9FB4;
            }
        }
        .current{
            color: #0F9FB4;
            border-bottom: 1px solid #0F9FB4;
        }
        .pointer{
            cursor: default;
        }
    }
</style>