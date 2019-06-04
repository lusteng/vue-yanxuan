<template>
    <div class="footerWrap">
        <footer class="footer">
            <nav>
                <router-link to="/login" class="footer-item current">
                    <i class="iconfont icon-shouye"></i>
                    <p>首页</p>
                </router-link>
                <router-link to="/cateList" class="footer-item">
                    <i class="iconfont icon-fenlei"></i>
                    <p>分类</p>
                </router-link>
                <router-link to="/login" class="footer-item">
                    <i class="iconfont icon-tupian"></i>
                    <p>识物</p>
                </router-link>
                <router-link to="/login" class="footer-item">
                    <i class="iconfont icon-gouwuche"></i>
                    <p>购物车</p> 
                </router-link> 
                <router-link to="/login" class="footer-item">
                    <i class="iconfont icon-geren"></i>
                    <p>个人</p>
                </router-link>  
            </nav> 
        </footer> 
        <GoTop />
    </div>
</template>

<script>
    import GoTop from '@/components/common/GoTop'
    export default{
        name: 'Footer',
        components: {
            GoTop
        }
    }
</script>

<style lang="scss">
    @import '~@/assets/css/mixin';
    .footerWrap{
        height: 48px;
    }
    .footer{
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
        background: $white;
        @include block(100%, 49px);
        nav{
            @include block(100%, 100%);
            @include flex(space-around);
        }
        .footer-item{ 
            text-align: center;
            i{
                font-size: 20px;
            }
            p{
                line-height: 1;
                margin-top: 4px;
            }
            &.current{
                color: $yx_theme;
            }
        }
    }
</style>
