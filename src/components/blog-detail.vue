<template>
    <div class="container">
        <div class="content">
            <div class="item-content">
                        <div class="content-title">
                                <a href="javascript:void(0)" >{{article.title}}</a>
                        </div>
                        <div class="p-info">
                            <span class="p-date">
                                <i class="fa fa-calendar"></i>
                                <a href="javascript:void(0)">{{article.created_at}}</a>
                            </span>
                            <span class="p-tags" v-for="(tag,tagIndex) in article.tag_id " :key="tagIndex">
                                <i class="fa fa-tag"></i>
                                <a href="javascript:void(0)">{{getTag(tag)}}</a>
                            </span>
                        </div>
                        <div class="content-text1 markdown-body">
                             <VueMarkdown :source="article.article" class="markdown-class"></VueMarkdown>
                        </div>
                </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
    name:'blog-detail',
    components:{VueMarkdown},
    data(){
        return {
            article: {
                title: '',
                article: '',
                created_at: '',
                tag_id: []
            }
        }
    },
    computed:{
        ...mapState({list:'ArticleList'})
    },
    methods: {
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
    },
    mounted(){
        this.article = this.$store.state.ArticleDetail
        console.log(this.article)
    }
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    .content{
        padding-top: 45px;
        padding-left: 320px;
        background-clip: content-box;
        background-color: #2d4356;
        .item-content{
                width: 100%;
                max-width: 840px;
                position: relative;
                left: -40px;
                top: 0;
                text-align: left;
                padding: 20px;
                background-color: #263949;
                box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
                .content-title{
                    padding-left: 20px;
                    padding-top: 0.5em;
                    font-size: 30px;
                    font-weight: bold;   
                }
                .content-title a:hover{
                    cursor: pointer;
                    color: #0F9FB4;
                }
                .content-text1{
                        padding-left: 20px;
                        font-size: 15px;
                        margin: 1.5em 0;
                }
            }
            .p-info{
                padding-top: 20px;
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
@media print, screen and (max-width: 800px) {
  .container{
      transition: all ease-out 0.5s;
      .content{
          padding-left: 5%;
          padding-right: 5%;
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
</style>