<template>
    <div class="sider-bar" >
       <nav class="h-head">
           <div class="h-hdimg">
               <a href="javascript:void(0)" @click="jumpTo('/')">
                   <img class="avatar" src="../assets/img/avatar.jpg" alt="" width="128" height="128">
               </a>
               <h3 class="author">
                   zfb-not-alipay
               </h3>
           </div>
           <p class="m-desc">
                我来鹅城就三件事，
                <br>
                公平！公平！还tm是公平！
           </p>
           <div class="m-nav">
               <ul>
                   <li @click="jumpTo('Archives')">归档</li>
                   <li @click="jumpTo('Categories')">分类</li>
                   <li @click="jumpTo('Tags')">标签</li>
                   <li @click="jumpTo('About')">关于</li>
                   <li class="m-sch">
                       <input class="txt" type="text"
                        id="local-search-input"
                        v-on:keyup.enter="submit"
                        v-model="search"
                        name="q"
                        onfocus="if(this.value=='搜索'){this.value='';}"
                        onblur="if(this.value==''){this.value='搜索';}">
                   </li>
               </ul>

           </div>
       </nav>
    </div>
</template>

<script>
    export default {
        name: "sideBar",
        data(){
          return {
              curHeight:0,
              search: '搜索'
          }
        },
        methods:{
            jumpTo(to){
                let url = to 
                this.$router.push({
                    name: url
                });
            },
            submit(){
                this.$myLoading.open()
                this.$api.getArticles({keyword:this.search}).then(res=>{
                    this.$store.commit('SetSearchData',res.data)
                    this.$myLoading.hide()
                    console.log(this.$route.path)
                    if(this.$route.path != '/search'){
                        this.$router.push({
                            path:'search'
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.sider-bar{
    transition: all ease-out 0.5s;
    animation: 0.5s ease-out showmenu;
    width: 320px;
    float: left;
    position: absolute;
    .h-head{
        padding: 45px 0;
        text-align: left;
        .h-hdimg{
            padding: 0 65px 0 45px;
            .avatar{
                width: 128px;
                height: 128px;
                padding: 5px;
                border: 2px solid #0F9FB4;
                border-radius: 50%;
                vertical-align: middle;
                margin-bottom: 20px;
            }
            .author{
              margin-bottom: 20px;
              font-size: 16px;
              letter-spacing: 1px;
            }
        }
        .m-desc{
            font-size: 14px;
            background: rgba(0, 0, 0, 0.15);
            border-left: 2px solid #0F9FB4;
            padding: 20px 65px 20px 43px;
        }
        .m-nav{
            margin-top: 20px;
            font-size: 12px;
            ul{
              padding: 0 65px 0 45px;
            }
            li{
                cursor: pointer;
                height: 24px;
                line-height: 24px;
                margin: 4px 0;
                &:hover{
                    color: #0F9FB4;
                    list-style: disc ;
                }
                input{
                    border: none;
                }
            }
            
            .m-sch .txt {
                width: 140px;
                height: 20px;
                line-height: 20px;
                padding: 0 0 4px;
                border: 1px solid #0F9FB4;
                border-width: 0 0 1px;
                background: 0;
            }
        }
    }
}
@media print, screen and (max-width: 800px){
    .sider-bar{
        width: 250px;
    }
}
</style>
