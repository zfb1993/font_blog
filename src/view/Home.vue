<template>
    <div class="home">
        <sideBar></sideBar>
        <container></container>
    </div>
</template>

<script>
    import sideBar from '../components/sideBar'
    import container from '../components/content'
    export default {
        components:{
            sideBar,container
        },
        name: "Home"
    }
</script>

<style lang="scss" scoped>
.home{
    height: 100%;
}
</style>