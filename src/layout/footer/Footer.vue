<template>
    <div class="footerWrap">
        <footer class="footer">
            <nav>
                <router-link to="/" class="footer-item" :class="{current: pathName === 'index'}">
                    <i class="iconfont icon-shouye"></i>
                    <p>首页</p>
                </router-link>
                <router-link to="/catelist" class="footer-item" :class="{current: pathName === 'catelist'}">
                    <i class="iconfont icon-fenlei"></i>
                    <p>分类</p>
                </router-link>
                <router-link to="/topic" class="footer-item" :class="{current: pathName === 'topic'}">
                    <i class="iconfont icon-tupian"></i>
                    <p>识物</p>
                </router-link>
                <router-link to="/login" class="footer-item">
                    <i class="iconfont icon-gouwuche"></i>
                    <p>购物车</p> 
                </router-link> 
                <router-link to="/login" class="footer-item" :class="{current: pathName === 'login'}">
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
        }, 
        data(){
            return {
                pathName: '',
            }
        },
        created(){ 
            // router-link active class 选中的另外一种菜单选中方法，匹配路由名称
            let pathName = this.$route.name;
            this.pathName = pathName;  
        },
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
