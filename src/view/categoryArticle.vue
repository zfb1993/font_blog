<template>
    <div class="home">
        <layout></layout>
        <categoryArticle :class="containerClass"></categoryArticle>
    </div>
</template>

<script>
    import layout from '../components/layout'
    import categoryArticle from '../components/category-article'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            layout,categoryArticle
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