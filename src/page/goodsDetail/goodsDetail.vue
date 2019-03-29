<template>
    <div>
        <Header />
        <div class="yx-detail">
            <!-- 商品展示 -->
            <GoodsInfo 
                :banner="detailInfo.banner" 
                :characteristic="detailInfo.characteristic"
                :price="detailInfo.price"
            />
            <!-- 商品规格参数 -->
            <GoodsSpecification />
            <!-- 商品评价 -->
            <GoodsComment 
                :comment="detailInfo.comment"
            />
            <!-- 商品参数 -->
            <GoodsArgument 
                :args="detailInfo.arg"
            />
            <!-- 商品详情 -->
            <div class="yx-detail-inner" v-html="detailInfo.html"></div>
            <!-- 猜你喜欢 -->
            <GuessYouLike 
                :productId="`${this.$route.params.id}`"
            /> 
        </div>
        <!-- 底部 -->
        <Footer />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Header from '@/layout/header/SimpleHeader'
    import Footer from '@/layout/footer/BuyFooter'
    import GoodsInfo from './GoodsInfo'
    import GoodsSpecification from './GoodsSpecification'
    import GoodsComment from './GoodsComment'
    import GoodsArgument from './GoodsArgument'
    import GuessYouLike from '@/components/market/GuessYouLike'
    export default {
        name: "goodsDetail",
        computed: {
            ...mapGetters(['detailInfo'])
        },
        components: {
            Header,
            Footer,
            GoodsInfo,
            GoodsSpecification,
            GoodsComment,
            GoodsArgument,
            GuessYouLike,
        },
        data(){
            return {

            }
        },
        created(){ 
            this.$store.dispatch('fetchGoodsDetailInfo')
        }    
    }
</script>

<style lang="scss">
    .yx-detail-inner img{
        vertical-align: middle;
    }
</style>

