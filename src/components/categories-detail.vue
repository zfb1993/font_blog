<template>
    <div class="category">
        <section class="content">
            <h1>
                Categories
            </h1>
            <ul>
                <li class="category-list-item" v-for="(item,index) in categoryList" :key="index">
                    <a class="category-list-link"
                       href="javascript:void(0)"
                        @click="toPage(item.category_id)"
                    >
                        {{getCategory(item.category_id)}}
                    </a>
                    <span>{{item.count}}</span>
                </li>
            </ul>
            
        </section>
    </div>
</template>

<script>
export default {
    name:'categories-detail',
    data(){
        return {
            categoryList:[]
        }
    },
    methods:{
        getList(){
            this.$api.getCategories().then(res=>{
                if(res.status == 200){
                    this.categoryList = res.data
                }
            })
        },
        getCategory(category){
            let categories = this.$store.state.Categories
            let categoryName = ''
            categories.map(item=>{
                if (item.id == category){
                    categoryName = item.name
                }
            })
            return categoryName
        },
        toPage(category_id){
            this.$router.push({
                path: "CategoryArticles?id="+category_id
            });
        }
    },
    mounted(){
        this.getList()      
    }
}
</script>

<style lang="scss" scoped>
    .category{
        padding-top: 45px;
        padding-left: 320px;
        background-clip: content-box;
        section{
            width:60%;
            text-align: left;
            padding-left: 40px;
            h1{
                margin-top: 20px;
                text-align: left;
                font-size: 30px;
            }
            ul{
                margin-top: 40px;
                li{
                    a{
                        margin: 4px 6px 4px 0;
                        display: inline-table;
                        padding: 10px 20px;
                        background: #1f3041;
                        border-radius: 6%;
                        vertical-align: middle;
                        color: cadetblue;
                        font-size: 1.2em;
                        &:hover{
                            transition: all ease-out 0.5s;
                            transform: scale(1.1, 1.1);
                            color: aliceblue;
                        }
                    }
                    span{
                            color: aqua;
                            align-self: baseline;
                    }
                }
            }
        }
    }
@media print, screen and (max-width: 800px) {
  .category{
      padding-left: 5%;
      padding-right: 5%;
      transition: all ease-out 0.5s;
      section{
          width: 80%;
      }
  }
}
</style>