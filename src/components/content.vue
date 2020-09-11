<template>
    <div class="container">
        <div class="content">
            <div class="item" v-for="(item,index) in lists" :key="index">
                <div class="item-content">
                        <div class="content-title">
                                python之给pdf添加页码
                        </div>
                        <div class="content-text">
                            最近写release note, 总感觉用tex不太方便，特别是装texlive占用大量空间，还有各种依赖问题，想着能不能用markdown写更方便。
                            实践证明，typora导出pdf的功能真的很棒，唯独一个不足之处就是生成的PDF不带页码。
                        </div>
                        <p class="p-readmore">
                            <a href="/2020/08/13/python-pdf/">
                                阅读更多 &gt;&gt;
                            </a>
                        </p>
                </div>
                <div class="p-info">
                    <span class="p-date">
                        <i class="fa fa-calendar"></i>
                        <a href="/2020/08/13/python-pdf/">2020-08-13</a>
                    </span>
                    <span class="p-category">
                        <i class="fa fa-folder">
                        </i>
                        <a href="/categories/Python/">Python</a>
                    </span>
                    <span class="p-tags">
                        <i class="fa fa-tag"></i>
                        <a href="/tags/pdf/">pdf</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data(){
            return {
                lists:[
                    1,2,3,4,5,6
                ]
            }
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
                .content-text{
                        font-size: 15px;
                        margin: 1.5em 0;
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