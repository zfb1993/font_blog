<template>
    <div class="home">
        <blog-header @click="toggleClass()" ref="blogHeader"></blog-header>
        <sideBar :class="sideBarClass"></sideBar>
        <blogDetail :class="containerClass"></blogDetail>
    </div>
</template>

<script>
    import sideBar from '../components/sideBar'
    import blogHeader from '../components/blog-header'
    import blogDetail from '../components/blog-detail'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            sideBar,blogDetail,blogHeader
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