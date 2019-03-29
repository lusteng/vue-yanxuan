/*
 * @Desc: 猜你喜欢板块 
 */

<template>
    <section class="yx-guess">
        <ThroughLineTitle
            title="猜你喜欢"
        />
        <div class="yx-guess-list"> 
            <ProductCard 
                v-for="(item, index) in rcmd_goods"
                :key="index"
                :productData="{
                    title: item.name,
                    desc: item.simpleDesc,
                    picUrl: item.listPicUrl,
                    price: item.retailPrice,
                    discount: item.counterPrice, 
                    tag: item.promotionDesc,
                }"
                :boxHeight="'170px'"
                outterClass="goodsBox"
            />  
        </div> 
    </section>    
</template>

<script>
import { mapGetters } from 'vuex'
import ThroughLineTitle from '@/components/common/ThroughLineTitle'
import ProductCard from '@/components/common/ProductCard'
export default {
    name: "GuessYouLike",
    components: {
        ThroughLineTitle,
        ProductCard,
    },
    computed: {
        ...mapGetters(['rcmd_goods'])
    },
    props: {
        //商品id
        productId: {
            type: String,
            required: true  
        }   
    },
    created(){
        this.$store.dispatch('fetchRecommendGoods', {
            id: this.productId
        })
    }
    
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/mixin'; 
.yx-guess{ 
    background: $white; 
    .yx-guess-list{ 
        display: flex;
        padding: 0 10px;
        flex-wrap: wrap; 
        .goodsBox{
            width: 50%;
            padding-bottom: 16px;
            &:nth-of-type(2n+1){
                padding-right: 5px;
            }
            &:nth-of-type(2n){
                padding-left: 5px;
            }
        }
    }
} 
</style>


