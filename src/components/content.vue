<template>
    <div class="container">
        <div class="content">
            <div class="item" v-for="(item,index) in articles" :key="index">
                <div class="item-content">
                        <div class="content-title">
                                <a href="javascript:void(0)" @click="jumpTo(item)">{{item.title}}</a>
                        </div>
                        <div class="content-text markdown-body">
                            <VueMarkdown :source="getIntroduct(item.article)" v-highlight></VueMarkdown>
                        </div>
                        <p class="p-readmore" @click="jumpTo(item)">
                            <a href="javascript:void(0)">
                                阅读更多 &gt;&gt;
                            </a>
                        </p>
                </div>
                <div class="p-info">
                    <span class="p-date">
                        <i class="fa fa-calendar"></i>
                        <a href="javascript:void(0)">{{item.created_at}}</a>
                    </span>
                    <!-- <span class="p-category">
                        <i class="fa fa-folder">
                        </i>
                        <a href="javascript:void(0)">Python</a>
                    </span> -->
                    <span class="p-tags" v-for="(tag,tagIndex) in item.tag_id " :key="tagIndex">
                        <i class="fa fa-tag"></i>
                        <a href="javascript:void(0)">{{getTag(tag)}}</a>
                    </span>
                </div>
            </div>
            <page 
                :pageSize="pageConfig.pageSize" 
                :currentPage="pageConfig.currentPage" 
                :totalPage="pageConfig.totalPage"
                @page-change="pageChange"
            ></page>
        </div>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import page from './pages'
    export default {
        name: "contents",
        components:{
            page,VueMarkdown
        },
        data(){
            return {
                articles:[],
                pageConfig:{
                    
                }
            }
        },
        methods:{
            getList(page){
                this.$myLoading.open()
                this.$api.getArticles({page:page}).then(res=>{
                    this.articles = res.data.data
                    this.pageConfig.currentPage = res.data.current_page
                    this.pageConfig.totalPage = res.data.last_page
                    this.pageConfig.pageSize = res.data.per_page
                    this.$store.commit('SetArticleList',res.data)
                    this.$myLoading.hide()
                })
            },
            jumpTo(item){
                this.$store.commit('SetArticleDetail',item)
                this.$router.push({
                    path: "detail"
                });
            },
            getTag(tag){
                let tags = this.$store.state.Tags
                let tagName = ''
                tags.map(item=>{
                    if (item.id == tag){
                        tagName = item.name
                    }
                })
                return tagName
            },
            getIntroduct(content){
                return content.substr(0,200)
            },
            pageChange(page){
                this.getList(page);
            }
        },
        mounted(){
            if(this.$store.state.ArticleList){
                let data = this.$store.state.ArticleList
                this.articles = data.data
                this.pageConfig.currentPage = data.current_page
                this.pageConfig.totalPage = data.last_page
                this.pageConfig.pageSize = data.per_page
            }else{
                this.getList(1)
            }
        }
    }
</script>

<style lang="scss">
    .content-text{
            img{
                width: 100px !important;
            }
    }
</style>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    .content{
        padding-top: 45px;
        padding-left: 320px;
        background-clip: content-box;
        background-color: #2d4356;
        .item{
            width: 100%;
            .item-content{
                width: 100%;
                max-width: 840px;
                position: relative;
                left: -40px;
                top: 0;
                text-align: left;
                padding: 40px;
                background-color: #263949;
                box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
                .content-title{
                    padding-top: 1em;
                    font-size: 30px;
                    font-weight: bold;   
                }
                .content-title a:hover{
                    cursor: pointer;
                    color: #0F9FB4;
                }
                .content-text{
                        font-size: 15px;
                        margin: 1.5em 0;
                        img{
                            width: 100px !important;
                        }
                }
                .p-readmore{
                    text-align: right;
                    a{
                        font-size: 12px;
                        padding: 0.6em 1.2em;
                        background: #213240;
                    }
                }
            }
            .p-info{
                padding-top: 20px;
                padding-left: 20px;
                text-align: left;
                font-size: 12px;
                padding-bottom: 40px;
                span{
                    margin-left: 20px;
                    i{
                        color: #999;
                    }
                    a{
                        color: #999;
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}
@media print, screen and (max-width: 800px) {
  .container{
      transition: all ease-out 0.5s;
      .content{
          padding-left: 5%;
          padding-right: 5%;
          .item{
              .item-content{
                  padding:0;
                  padding-left: 15px;
                  padding-right: 20px;
                  position: static;
                  width: 100%;
                  box-sizing: border-box;
                  .content-text{
                      margin: 10px;
                  }
                  .p-readmore{
                      padding-bottom: 1.5em;
                  }
              }
          }
      }
  }
}
</style>