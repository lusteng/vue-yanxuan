<template>
    <div class="yx-detail">
        <!-- 商品展示 -->
        <GoodsViewSlide :banner="detailInfo.banner" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import GoodsViewSlide from './GoodsViewSlide'
    export default {
        name: "goodsDetail",
        computed: {
            ...mapGetters(['detailInfo'])
        },
        components: {
            GoodsViewSlide,
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

</style>

