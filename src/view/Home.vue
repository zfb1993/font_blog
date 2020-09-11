<template>
    <div class="home">
        <blog-header @click="toggleClass()" ref="blogHeader"></blog-header>
        <sideBar :class="sideBarClass"></sideBar>
        <container :class="containerClass"></container>
    </div>
</template>

<script>
    import sideBar from '../components/sideBar'
    import container from '../components/content'
    import blogHeader from '../components/blog-header'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle'])
        },
        components:{
            sideBar,container,blogHeader
        },
        data(){
            return {
                sideBarClass:'',
                containerClass:'',
                flag:false
            }
        },
        methods:{
            toggleClass(){
                if(this.flag){
                    this.sideBarClass = 'show'
                    this.containerClass = 'translate'
                    this.flag = false
                }else{
                    this.sideBarClass = ''
                    this.containerClass = ''
                    this.flag = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.home{
    height: 100%;
}
.show{
    display: block;
}
.translate{
    transform: translateX(250px);
}
</style>