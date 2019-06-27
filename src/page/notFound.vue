<template>
    <div class="yx-not">
        <SimpleHeader />
        <router-link to="/" class="pic">
            <img src="https://yanxuan.nosdn.127.net/15282710826304778.png" alt="" />
        </router-link>
        <div class="tip">
            <p>亲，你走得太远了</p>
            <p>好的生活，没那么贵，更没那么远</p>
            <router-link to="/">逛逛其他好物</router-link>
        </div>
    </div>
</template>

<script>
import SimpleHeader from '@/layout/header/SimpleHeader'
export default {
    name: "notFound",
    components: {
        SimpleHeader,
    },
    mounted(){
        this.$nextTick(() => {
            document.body.setAttribute('class', 'notBg')
        })
    },
    beforeDestroy(){
        document.body.removeAttribute('class')
    }
}
</script>

<style lang="scss">
    @import '~@/assets/css/mixin'; 
    .notBg{
        height: 100%;
        background: url('https://yanxuan.nosdn.127.net/15282710800804764.png');
    }
    .pic{
        width: 100%;
        display: flex;
        align-content: center;
        padding-top:40px; 
        img{
            width: 269px;
            height: 131px;
            margin: 0 auto;
        }
    }
    .tip{
        padding-top: 10px;
        color:$black;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        a{
            @include block(118px, 31px);
            margin-top: 5px;
            line-height: 31px;
            font-size: 12px;
            background: $yx_theme;
            color: $white;
            border-radius: 3px;
        }
    }
</style>

