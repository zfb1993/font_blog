<template>
    <div class="page" v-if="totalPage >= 1">
        <a v-if="currentPage > 1" href="javascript:void(0)" @click="toPage(currentPage-1)"> 上一页</a>
        <a href="javascript:void(0)" v-if="firstShow" @click="toPage(1)">1</a>
        <a class="pointer" v-if="beforeShow" @click="toPage(current-3)">…</a>
        <a :class="item.class" href="javascript:void(0)"
           v-for="(item,index) in pageList"
            :key="index"
            @click="toPage(item.page)"
        >
            {{item.page}}
        </a>
        <a class="pointer" v-if="afterShow" @click="toPage(current+3)">…</a>
        <a href="javascript:void(0)"  v-if="lastShow" @click="toPage(totalPage)">{{totalPage}}</a>
        <a v-if="currentPage < totalPage" href="javascript:void(0)" @click="toPage(currentPage+1)">下一页</a>
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
        getPages(){
            let begin = this.currentPage -2
            let end = this.currentPage + 2
            let obj = null
            let pageList = []
            if(begin <=  1){
                this.firstShow = false
            }else{
                this.firstShow = true
            }
            
            if(begin <=  2 || this.totalPage == 1){
                this.beforeShow = false
            }else{
                this.beforeShow = true
            }

            if(end >= this.totalPage-1 || this.totalPage == 1 ){
                this.afterShow = false
            }else{
                this.afterShow = true
            }
            if(end >= this.totalPage){
                this.lastShow = false
            }else{
                this.lastShow = true
            }

            for (begin;begin <= end; begin++){
                if(begin > 0 && begin <= this.totalPage ){
                    if(begin == this.currentPage){
                        obj = {page:begin,class:'current pointer'}
                    }else{
                        obj = {page:begin,class:''}
                    }
                    pageList.push(obj)
                }
            }
            return pageList
        },
        toPage(page){
            this.$emit("page-change", page);
        }
    },
    computed:{
        pageList(){
            return this.getPages()
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