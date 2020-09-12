<template>
    <div class="archive">
        <section class="content">
            <h1>Linux</h1>
            <div class="lists">
                <h2>2020</h2>
                <ul>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                </ul>
            </div>
            <div class="lists">
                <h2>2020</h2>
                <ul>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                </ul>
            </div>
            <div class="lists">
                <h2>2020</h2>
                <ul>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                    <li>08/13 <a href="javascript:void(0)">python之给pdf添加页码</a></li>
                </ul>
            </div>
        </section>
        <page></page>
    </div>
</template>

<script>
import page from './pages'

export default {
    name: "category-article",
    components:{
        page
    },
}
</script>

<style lang="scss" scoped>
    .archive{
        padding-top: 45px;
        padding-left: 320px;
        background-clip: content-box;
        section{
            width:60%;
            text-align: left;
            padding-left: 40px;
            margin-bottom: 40px;
            h1{
                margin-top: 20px;
                text-align: left;
                font-size: 30px;
            }
            .lists{
                margin-top: 23px;
                padding-left: 20px;
                h2{
                    margin-top: 20px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 5px;
                    position: relative;
                    &::before{
                        position: absolute;
                        content:' ';
                        border-radius: 50%;
                        background-color: #7166F7;
                        display: block;
                        width: 12px;
                        height: 12px;
                        top: 10px;
                        left: -20px;
                        opacity: 0.4;
                    }
                    &::after{
                        content: ' ';
                        border-right: 2px solid #7166F7;
                        height: 28px;
                        position: absolute;
                        left: -15px;
                        top: 20px;
                        opacity: 0.4;
                    }
                }
                ul{
                    margin-top: 10px;
                    color: #CECECE;
                    li{
                        font-size: 16px;
                        position: relative;
                        margin-top: 5px;
                        &::before{
                            position: absolute;
                            content:' ';
                            border-radius: 50%;
                            background-color: #7166F7;
                            display: block;
                            width: 8px;
                            height: 8px;
                            top: 6px;
                            left: -18px;
                            opacity: 0.4;
                        }
                        &::after{
                            content: ' ';
                            border-right: 2px solid #7166F7;
                            height: 15px;
                            position: absolute;
                            left: -15px;
                            top: 15px;
                            opacity: 0.4;
                        }
                        &:hover{
                            &::before{
                                opacity: 1;
                            }
                        }
                        a{
                            color: #0F9FB4;
                            &:hover{
                                opacity: 0.4;
                            }
                        }
                    }
                    li:last-child{
                        &::after{
                            height:calc(100% + 14px);
                        }
                    }
                }
            }
            div:last-child{
                ul{
                    li:last-child{
                        &::after{
                            height:0px;
                        }
                    }
                }
            }
        }
        
    }
@media print, screen and (max-width: 800px) {
  .archive{
      padding-left: 5%;
      padding-right: 5%;
      transition: all ease-out 0.5s;
      section{
          width: 80%;
      }
  }
}
</style>