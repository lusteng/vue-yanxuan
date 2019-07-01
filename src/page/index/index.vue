<template>
    <div>  
        <TopHeader />  
        <div class="yx-index">
            <Banner />
            <!-- 频道直达   -->
            <ShoppingChannle />
            <!-- 新人 -->
            <FreshmanModule />
            <!-- 品牌制造商 -->
            <BrandMade />
            <!-- 热销榜 -->
            <HotSell />
            <!-- 人气推荐 -->
            <PopularRecommend /> 
            <!-- 新品首发 -->
            <FastArrival />
            <!-- 类目商品展示 -->
            <CategoryGoodsBlock
                v-for="(item, index) in cateGoods"
                :key="index"
                :categoryData="item"
            ></CategoryGoodsBlock>
        </div>
        <Footer />  
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import TopHeader from '@/layout/header/TopHeader'
    import Banner from '@/components/common/Banner'
    import ShoppingChannle from './ShoppingChannle'
    import FreshmanModule from './FreshmanModule'
    import BrandMade from './BrandMade'
    import HotSell from './HotSell'
    import PopularRecommend from './PopularRecommend'
    import FastArrival from './FastArrival' 
    import CategoryGoodsBlock from '@/components/common/CategoryGoodsBlock'
    import Footer from '@/layout/footer/Footer'
    export default {
        name: "Index",
        components: {
            TopHeader,
            Banner,
            ShoppingChannle,
            FreshmanModule,
            BrandMade,
            HotSell,
            PopularRecommend,
            FastArrival,
            CategoryGoodsBlock,
            Footer, 
        }, 
        computed: {
            ...mapGetters(['cateGoods'])
        }, 
        created(){
            this.$store.dispatch('fetchCategoryGoods')
        }
    }
</script> 
