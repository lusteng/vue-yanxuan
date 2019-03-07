<template>
    <ProductShowContainer
        title="新品首发"
        more="#"
    >
        <div class="fastArrival">  
            <a 
                v-for="(item, index) in arrivals"
                :key="index"
                href="#"
            >   
                <div>
                    <ProductCard  :productData="item"/>
                </div>
            </a> 
        </div>
    </ProductShowContainer>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductShowContainer from '@/components/common/ProductShowContainer'
import ProductTag from '@/components/common/ProductTag'
import ProductCard from '@/components/common/ProductCard'
export default {
    name: "FastArrival",
    components: { 
        ProductShowContainer,
        ProductCard,
        ProductTag
    },
    computed: {
        ...mapGetters(['arrivals'])
    },
    created(){ 
        this.$store.dispatch('fetchFastArrivals')
    }    
}
</script>

<style lang="scss" scoped> 
    @import '~@/assets/css/mixin'; 
    .fastArrival{ 
        display: flex;
        flex-wrap: wrap; 
        padding-bottom: 10px;
        a{  
            display: inline-block;
            width: 108px;  
            margin-bottom: 6.5px;
            &:not(:nth-child(3n+3)){
                margin-right: 10px;
            }
        }
    }
</style>

