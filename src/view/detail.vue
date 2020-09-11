<template>
    <div class="home">
        <layout></layout>
        <blog-header @click="toggleClass()" ref="blogHeader"></blog-header>
        <sideBar :class="sideBarClass"></sideBar>
        <blogDetail :class="containerClass"></blogDetail>
    </div>
</template>

<script>
    import layout from '../components/layout'
    import blogDetail from '../components/blog-detail'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            layout,blogDetail
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