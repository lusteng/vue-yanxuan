<template>
    <div>  
        <TopHeader />  
        <Banner />  
        <Footer />  
        <!-- 服务 -->
        <ul class="yx-service">
            <li>
                <!-- <i class="iconfont icon-tubiao-"></i> -->
                <span>网易自营品牌</span>            
            </li> 
            <li>
                <!-- <i class="iconfont icon-65"></i> -->
                <span>30天无忧退货</span>            
            </li> 
            <li>
                <!-- <i class="iconfont icon-10"></i> -->
                <span>48小时快速退款</span>            
            </li> 
        </ul>
    </div>
</template>

<script>
    import TopHeader from '@/layout/header/TopHeader'
    import Footer from '@/layout/footer/Footer'
    import Banner from '@/components/common/Banner'
    export default {
        name: "Index",
        components: {
            TopHeader,
            Footer,
            Banner
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/mixin';
    .yx-service{
        height: 36px;
        line-height: 36px;
        padding: 0 15px; 
        background: $white;
        @include flex;
        li{
            flex: 1;
            text-align: center;
            color: $yx_theme;
            i{
                vertical-align: top;
                margin-right: 4px;
            }
        }
    }
</style>
