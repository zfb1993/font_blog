<template>
    <div class="home">
        <layout></layout>
        <tagArticle :class="containerClass"></tagArticle>
    </div>
</template>

<script>
    import tagArticle from '../components/tag-article'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            tagArticle
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