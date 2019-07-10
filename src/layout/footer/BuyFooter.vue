/*
 * @Desc: 购买商品footer
 */
//TODO 实现购买流程
<template>
    <div class="buyFooterWrap">
        <footer class="buyFooter footer"> 
            <div class="ft-kefu ft-btn">
                <i class="iconfont icon-kefu"></i>
            </div>
            <router-link class="ft-buy  ft-btn" to="/login">立即购买</router-link>
            <div class="ft-cart ft-btn">加入购物车</div>
        </footer> 
        <GoTop />
    </div>
</template>

<script>
    import GoTop from '@/components/common/GoTop'
    export default{
        name: 'BuyFooter',
        components: {
            GoTop
        }
    }
</script>

<style lang="scss"> 
    .buyFooterWrap{
        height: 52px;
    }
    .buyFooter{   
        @include flex;
        border: 1px solid $gray;
        .ft-btn{
            @include flex(center);
            height: 100%;
        }
        .ft-kefu{
            width: 77px;
            border-right: 1px solid $gray;
            i{
                font-size: 28px;
            }
        }
        .ft-buy, .ft-cart{ 
            flex: 1;
            font-size: 14px;
        }
        .ft-cart{
            background: $yx_theme;
            color:$white;
        }
    }
</style>
