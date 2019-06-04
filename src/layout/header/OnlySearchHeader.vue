<template>
    <header class="yx-search-box"> 
        <div class="yx-search-ipt">
            <i class="iconfont icon-sousuo-copy"></i>
            <input type="text" :placeholder="`${search_kd.defaultKeyword && search_kd.defaultKeyword.keyword}`"/>
        </div>     
    </header>    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "OnlySearchHeader",
    computed: {
        ...mapGetters(['search_kd'])
    },
    created(){
        this.$store.dispatch('fetchSearchKeywords')
    }
}
</script>


<style lang="scss" scoped> 
    @import '~@/assets/css/mixin'; 
    .yx-search-box{ 
        background: $white;
        padding: 10px 15px;
        .yx-search-ipt{
            @include block(100%, 28px);
            position: relative;
            padding: 0 10px;
            background: #f4f4f4;
            line-height: 28px;
            input[type="text"]{
                position: absolute;
                left: 10px;
                top: 0;
                padding-left: 25px;
                background: transparent;
                width: 280px;
                height: 100%; 
                font-size: 14px;
            } 
            .iconfont{
                color: #666;
                font-size: 14px;
            } 
        }
    }
</style>
