<template>
    <div class="headWrap">
        <header class="head">
            <div class="headSearch">
                <router-link to="/" class="head-logo"></router-link>
                <router-link to="/search" class="head-search ipt">
                    <i class="iconfont icon-sousuo-copy"></i>
                    <span class="placeholder">
                        搜索商品, 共21424款好物
                    </span>
                </router-link>        
                <router-link to="/login" class="head-login">登录</router-link>
            </div> 
            <CategoryNav />
        </header> 
    </div>
</template>

<script>
    import CategoryNav from '@/components/common/CategoryNav'
    
    export default {
        name: "topHeader", 
        components: {
            CategoryNav
        }
    }

</script>

<style lang="scss">
    @import '~@/assets/css/mixin';
    .headWrap{
        height: 74px;
    }
    .head{
        @include posFixed(999);
        width: 100%; 
        .headSearch{
            padding:8px 15px;  
            text-align: left;
            background: $white; 
            .head-logo{
                @include block(69px, 20px);
                margin-right: 10px;
                background: url('../../assets/img/logo.png') no-repeat;
                background-size: cover;
                vertical-align: sub;
            }
            .head-search{
                @include block(221px, 28px);
                line-height: 28px;
                background: #ededed;
                text-align: center;
                font-size: 14px;
                color: $gray_dark;
            }
            .head-login{ 
                @include block(35px, 18px);
                border: 1px solid $yx_theme;
                border-radius: 3px;
                color: $yx_theme;
                margin-left: 10px;
                text-align: center;
            }
        }
    }
</style>
