<template>
    <div class="home">
        <layout></layout>
        <archivesDetail :class="containerClass"></archivesDetail>
    </div>
</template>

<script>
    import layout from '../components/layout'
    import archivesDetail from '../components/archives-detail'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            layout,archivesDetail
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