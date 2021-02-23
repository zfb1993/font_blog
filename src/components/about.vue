<template>
    <div class="category">
        <section class="content">
            <h1>
                About
            </h1>
            <div class="content-text1 markdown-body">
                    <VueMarkdown  v-highlight :source="article">
                    </VueMarkdown>
            </div>
        </section>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
    components:{VueMarkdown},
    name:'about',
    data(){
        return {
            article:'',
        }
    },
    mounted(){
        this.article = 
        `
            ## 技能清单
            - Web开发：PHP
            - Web框架：ThinkPHP/Lavarel
            - 前端框架：Vue
            - 前端工具：Sass/Less
            - 数据库相关：MySQL/PDO/Elasticsearch
            - 环境部署：docker/docker-compose

            ## 2021学习计划
            - java
            - webpack
        `
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
            .content-text1{
                    padding-left: 20px;
                    font-size: 15px;
                    margin: 1.5em 0;
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