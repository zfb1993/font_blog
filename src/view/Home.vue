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
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            sideBar,container,blogHeader
        },
        data(){
            return {
                flag:false
            }
        },
        methods:{
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