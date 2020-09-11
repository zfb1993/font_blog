<template>
    <div>
        <blog-header @click="toggleClass()" ref="blogHeader"></blog-header>
        <sideBar :class="sideBarClass"></sideBar>
    </div>
</template>

<script>
import sideBar from './sideBar'
import blogHeader from './blog-header'
import {mapState} from 'vuex'
export default {
    name: 'layout',
    computed:{
        ...mapState(['toggle','sideBarClass','containerClass'])
    },
    components:{
        sideBar,blogHeader
    },
}
</script>

<style lang="" scoped>
    
</style>