<template>
    <div class="page" v-if="totalPage >= 1">
        <a v-if="currentPage > 1" href="javascript:void(0)"> 上一页</a>
        <a href="javascript:void(0)" v-if="firstShow">1</a>
        <a class="pointer" v-if="beforeShow">…</a>
        <a :class="item.class" href="javascript:void(0)" v-for="(item,index) in pageList" :key="index">
            {{item.page}}
        </a>
        <a class="pointer" v-if="afterShow">…</a>
        <a href="javascript:void(0)"  v-if="lastShow">{{totalPage}}</a>
        <a v-if="currentPage < totalPage" href="javascript:void(0)">下一页</a>
    </div>
</template>

<script>
export default {
    props:{
        pageSize:{
            type: Number,
            default: 10,
        },
        currentPage:{
            type: Number,
            default: 1,
        },
        totalPage:{
            type: Number,
            default: 1,
        },
    },
    name:'page',
    data(){
        return {
            beforeShow: true,
            afterShow: true,
            firstShow: true,
            lastShow: true,
        }
    },
    methods:{
        getPages(value){
            let begin = value.currentPage -2
            let end = value.currentPage + 2
            let obj = null
            let pageList = []
            
            if(begin <=  1){
                this.firstShow = false
            }else{
                this.firstShow = true
            }

            if(begin <=  2 || value.totalPage == 1){
                this.beforeShow = false
            }else{
                this.beforeShow = true
            }

            if(end >= value.totalPage-1 || value.totalPage == 1 ){
                this.afterShow = false
            }else{
                this.afterShow = true
            }
            if(end >= value.totalPage){
                this.lastShow = false
            }else{
                this.lastShow = true
            }

            for (begin;begin <= end; begin++){
                console.log(begin,value)
                if(begin > 0 && begin <= value.totalPage ){
                    if(begin == value.currentPage){
                        obj = {page:begin,class:'current pointer'}
                    }else{
                        obj = {page:begin,class:''}
                    }
                    pageList.push(obj)
                }
            }
            return pageList
        }
    },
    computed:{
        pageList(){
            return this.getPages({pageSize:this.pageSize,currentPage:this.currentPage,totalPage:this.totalPage})
        }
    },
    mounted:function(){
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