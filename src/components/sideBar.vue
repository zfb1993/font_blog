<template>
    <div class="sider-bar">

    </div>
</template>

<script>
    export default {
        name: "sideBar",
        data(){
          return {
              curHeight:0,
          }
        },
        beforeMount() {
            let h = document.documentElement.clientHeight || document.body.clientHeight
            this.curHeight = h
        }
    }
</script>

<style lang="scss" scoped>
.sider-bar{
    width: 320px;
    background: url("../assets/img/backgroud.png");
    background-repeat: repeat-y;
}
</style>