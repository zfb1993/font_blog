<template>
    <div class="home">
        <about :class="containerClass"></about>
    </div>
</template>

<script>
    import about from '../components/about'
    import {mapState} from 'vuex'
    export default {
        name: "About",
        computed:{
            ...mapState(['toggle','sideBarClass','containerClass'])
        },
        components:{
            about
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