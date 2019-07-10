<template>
    <ProductShowContainer
        title="人气推荐"
        more="#"
    >
        <div class="popularRecommend"> 
            <a v-if="populars.main_d" class="big" href="#">
                <div class="p_pic">
                    <img v-lazy="populars.main_d.picUrl" alt="">
                </div>
                <div class="p_info">
                    <p class="text-overflow">{{populars.main_d.title}}</p>
                    <p class="text-overflow">{{populars.main_d.sub_title}}</p>
                    <p>￥{{populars.main_d.price}}</p>
                </div>
            </a>
            <div class="small">
                <a 
                    v-for="(item, index) in populars.sub_d"
                    :key="index"
                    href="#"
                >   
                    <div>
                        <ProductCard  :productData="item"/>
                    </div>
                </a>
            </div> 
        </div>
    </ProductShowContainer>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductShowContainer from '@/components/common/ProductShowContainer'
import ProductCard from '@/components/common/ProductCard'
export default {
    name: "PopularRecommend",
    components: { 
        ProductShowContainer,
        ProductCard 
    },
    computed: {
        ...mapGetters(['populars'])
    },
    created(){ 
        this.$store.dispatch('fetchPopularRecommends')
    }    
}
</script>

<style lang="scss" scoped>  
    .popularRecommend{
        padding-bottom: 15px;
        .big{
            height: 140px;
            margin-bottom: 10px;
            background: #FEF0DF;
            @include flex;
            .p_pic{
                width: 140px;
                margin-right: 15px; 
            }
            .p_info{
                 flex-grow: 1; 
                 p:nth-of-type(1){
                     @include blackFont;
                 } 
                 p:nth-of-type(2){
                    color:#7F7F7F;
                 } 
                 p:nth-of-type(3){ 
                    color: $yx_theme;
                    font-size: 14px;
                    line-height: 24px;
                 } 
            }
        }
        .small{
            display: flex; 
            a{
                flex: 1;
                &:not(:last-child){
                    padding-right: 10px;
                }
            }
        }
    }
</style>

