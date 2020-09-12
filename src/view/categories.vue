<template>
    <div class="home">
        <layout></layout>
        <categoriesDetail :class="containerClass"></categoriesDetail>
    </div>
</template>

<script>
    import layout from '../components/layout'
    import categoriesDetail from '../components/categories-detail'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            layout,categoriesDetail
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