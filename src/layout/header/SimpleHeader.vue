<template>
    <div class="simpleHeadWrap">
        <header class="simpleHead head">
            <router-link class="hd-home hd-item" to="/">
                <i class="iconfont icon-shouye">
                    <em>首页</em>
                </i>
            </router-link>
            <router-link class="hd-logo hd-item" to="/">
                <i class="logo">
                    <em>网易严选</em>
                </i>
            </router-link>
            <router-link class="hd-search hd-item" to="/search">
                <i class="iconfont icon-sousuo-copy">
                    <em>搜索</em>
                </i>
            </router-link>
            <router-link class="hd-cart hd-item" to="/cart">
                <i class="iconfont icon-gouwuche">
                    <em>购物车</em>
                </i>
            </router-link>
        </header>
    </div>
</template>

<script>
export default {
    name: "SimpleHeader"
}
</script>


<style lang="scss">
    @import '~@/assets/css/mixin';
    $headHight: 44px;
    .simpleHeadWrap{
        height: $headHight + 1; 
    }
    .simpleHead{ 
        height: $headHight + 1;
        border-bottom: 1px solid $gray;
        text-align: center;
        background: $white;   
        padding: 0 12px;
        .hd-item{
            height: 100%;
            line-height: $headHight; 
            &:not(.hd-logo){
                position: absolute;
                padding: 0 8px;
                height: 100%;
                top: 0;
            }
            i{
                font-size: 24px;
            }
            em{
                width: 0;
                display: inline-block;
                text-indent: -10000px;
            }
        }
        .hd-logo{ 
            i{
                @include block(85px, 25px);
                background: url('../../assets/img/logo.png') no-repeat;
                background-size: cover;
                vertical-align: middle;
            }
        }
        .hd-home{
            left: 0;
        }
        .hd-search{
            right: 46px;
        }
        .hd-cart{
            right: 0;
        }
    }
</style>
