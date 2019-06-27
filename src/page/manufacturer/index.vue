<template>
    <div>
        <SimpleHeader />  
        <div class="yx-manufacturer">
            <div class="tp-banner">
                <div class="hd">
                    <img v-lazy="mrData.mr ? mrData.mr.img : ''">
                </div>
                <div class="cnt">
                    <p class="til">{{mrData.mr ? mrData.mr.title : ''}}</p>
                    <div class="desc">
                        <p 
                            v-for="(e, idx) in mrData.mr ? mrData.mr.desc : []"
                            :key="idx"
                        >{{e}}</p>
                    </div>
                </div>
            </div>
            <div class="mf-list  p-list"> 
                <ProductCard 
                    v-for="(item, index) in mrData.list"
                    :key="index"
                    :productData="item"
                    :boxHeight="'170px'"
                    outterClass="goodsBox"
                /> 
                <div class="text-center" v-if="!mrData.list || mrData.list.length === 0">抱歉，没有找到符合条件的商品</div>
            </div> 
        </div>
        <Footer />   
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductCard from '@/components/common/ProductCard' 
import SimpleHeader from '@/layout/header/SimpleHeader'
import Footer from '@/layout/footer/Footer'
export default {
    name: "manufacturer",
    computed: {
        ...mapGetters(['mrData'])
    },
    components: {
        ProductCard,
        SimpleHeader,
        Footer,
    },
    data(){
        return {

        }
    },   
    created(){
        this.$store.dispatch('fetchManufacturerData')
    }, 
}
</script>

<style lang="scss">
    @import '~@/assets/css/mixin'; 
    @import '~@/assets/css/productList'; 
    .yx-manufacturer{ 
        .tp-banner{
            background: $white;
            margin-bottom: 10px;
            .hd{
                width: 375px;
                height: 200px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .cnt{
                padding: 10px 15px 0; 
                margin-bottom: 10px; 
                .til{
                    color: $black;
                    font-size: 18px; 
                    line-height: 28px;
                }
                .desc{
                    line-height: 20px;
                    font-size: 14px;
                    color: $gray_dark;
                    padding: 6px 0 18px;
                }
            }
        }
        .mf-list{
            background: $white;
            padding-top: 10px;
        }
    }
</style>


