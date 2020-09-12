<template>
    <div class="home">
        <layout></layout>
        <tag :class="containerClass"></tag>
    </div>
</template>

<script>
    import layout from '../components/layout'
    import tag from '../components/tags'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            layout,tag
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