<template>
    <div>
        <blogHeader @click="toggleClass()" ref="blogHeader"></blogHeader>
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