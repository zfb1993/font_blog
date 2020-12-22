<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  mounted() {
    
  },
  created(){
            this.$store.dispatch('AcInit');
        },
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
</style>
