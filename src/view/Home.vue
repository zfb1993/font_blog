<template>
    <div class="home">
        <layout></layout>
        <indexContent :class="containerClass"></indexContent>
    </div>
</template>

<script>
    import layout from '../components/layout'
    import indexContent from '../components/content'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            layout,indexContent
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