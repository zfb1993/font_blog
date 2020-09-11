<template>
    <div class="header" @click="showSideBar">
        <div class="icon-out" >
            <span></span>
            <span></span>
            <span></span>
        </div>
        ZFB-NOT-ALIPAY
    </div>
</template>

<script>
export default {
    name:'blog-header',
    data(){
        return {

        }
    },
    methods:{
        showSideBar(){
        }
    }
}
</script>

<style lang="scss" scoped> 
    .header{
        display: none;
    }
    @media print, screen and (max-width: 800px) {
        .header{
            display: block;
            margin-top: 0.7em;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
            height: 30px;
            line-height: 30px;
            .icon-out{
                color: #CECECE;
                height: 48px;
                width: 48px;
                font-size: 24px;
                text-align: center;
                left: 0;
                top: 0;
                position: absolute;
                transition: background 0.5s;
                span{
                        position: absolute;
                        left: 14px;
                        top: 24px;
                        left: calc((100% - 20px) / 2);
                        top: calc((100% - 1px) / 2);
                        width: 20px;
                        height: 1px;
                        background: #CECECE;
                }
                span:nth-child(1){
                    transform: translateY(6px) rotate(0deg);
                }
                span:nth-child(3){
                    transform: translateY(-6px) rotate(0deg);
                }
            }
        }

    }
</style>