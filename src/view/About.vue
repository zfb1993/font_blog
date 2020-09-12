<template>
    <div class="home">
        <layout></layout>
        <about :class="containerClass"></about>
    </div>
</template>

<script>
    import layout from '../components/layout'
    import about from '../components/about'
    import {mapState} from 'vuex'
    export default {
        name: "About",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            layout,about
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