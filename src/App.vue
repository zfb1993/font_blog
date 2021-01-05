<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  mounted(){
      this.$store.dispatch('AcInit');
  },
  created() {
      setTimeout(() => {
          window.L2Dwidget.init({
              pluginRootPath: '../public/live2dw/',
              pluginJsPath: 'lib/',
              pluginModelPath: 'live2d-widget-model-miku/assets/', //中间这个haru_2就是你的老婆,想换个老婆,换这个就可以了
              tagMode: false,
              debug: false,
              model: { jsonPath: 'live2dw/live2d-widget-model-miku/assets/miku.model.json' }, 
              display: { position: 'right', width: 200, height: 500 },  //调整大小,和位置
              mobile: { show: true },   //要不要盯着你的鼠标看
              log: false, 
          })
      }, 1000)
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      } 

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
  }
}
</script>

<style>
*,body{
  padding: 0;
  margin: 0;
  color: #CECECE;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
body{
  background: #2d4356 url("./assets/img/backgroud.png");
  background-repeat: repeat-y;
  background-position-x: -80px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media print, screen and (max-width: 800px) {
  body{
    background: #2d4356 ;
  }
  .sider-bar{
    display: none;
  }
  .show{
    display: block;
  }
}
button, textarea, input, select {
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial, simsun, "宋体";
  font-size: 12px;
  outline: 0;
}
.markdown-body h1, .markdown-body h2 {
    /* padding-bottom: .3em; */
    border-bottom: none !important;
}
</style>
