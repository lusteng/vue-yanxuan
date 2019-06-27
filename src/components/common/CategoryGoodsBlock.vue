/*
 * @Desc 展示多商品类目框
 */

<template>
    <section class="yx-category">
        <div v-if="categoryData.main" class="yx-category-head">
            <router-link :to="`/manufacturer/(${Math.ceil(Math.random() * 10)}`">
                <img v-lazy="categoryData.main.picUrl" alt="" />
            </router-link>
        </div>
        <div class="yx-category-list" v-if="categoryData.goods.length > 1"> 
            <swiper :options="swiperOption">
                <swiper-slide 
                    v-for="(item, index) in categoryData.goods"
                    :key="index" 
                > 
                    <ProductCard :productData="item" />
                </swiper-slide> 
                <swiper-slide> 
                    <router-link class="lookMore" :to="`/manufacturer/(${Math.ceil(Math.random() * 10)}`">
                        查看更多&gt;
                    </router-link>
                </swiper-slide> 
            </swiper> 
        </div>
    </section>
</template>

<script> 
import ProductCard from '@/components/common/ProductCard' 
export default {
    name: "CategoryGoodsBlock",
    components: {
        ProductCard
    },
    props: {
        categoryData: {
            type: Object,
            default(){
                return {
                    main: {},
                    goods: []
                }
            }
        }
    },
    data(){
        return { 
                    swiperOption: {
                        slidesPerView: 'auto'
                    }
                }
    }
}
</script>

<style lang="scss" scoped> 
    @import '~@/assets/css/mixin';
    $space : 10px;
    .yx-category{
        padding-bottom: 15px;
        margin-bottom: $space;
        background: $white;
        .yx-category-head{
            height:  185px;
            margin-bottom: 10px;
            img{
                height: 100%;
            }
        }
        .yx-category-list{
            height: 180px;
            .swiper-slide{
                width: 100px;
                margin-right: 10px;
            }
            .lookMore{
                @include block(100px, 100px);
                line-height: 100px; 
                text-align: center;
                background: $gyBackgroud;
            }
        }
    }
</style>
