/*
 * @Desc: 展示同类商品 
 */

<template>
    <section class="cg">
        <div class="cg-head">
            <h3>{{itemData.title}}</h3>
            <h4>{{itemData.sub_title}}</h4>
        </div>
        <div class="cg-list p-list"> 
            <ProductCard 
                v-for="(item, index) in itemData.list"
                :key="index"
                :productData="item"
                :boxHeight="'170px'"
                outterClass="goodsBox"
            /> 
        </div>
    </section>
</template>

<script>
import ProductCard from '@/components/common/ProductCard'
export default {
    name: "ItemProductBlock",
    components: {
        ProductCard
    },
    props: {
        itemData:{
            type: Object,
            data(){
                return {
                    title: "",
                    subTitle: "",
                    list: []
                }
            }
        }
    }
}
</script>

<style lang="scss"> 
@import '~@/assets/css/productList'; 
.cg{
    margin-bottom: 10px;
    background: $white;
    .cg-head{
        padding: 12px 0;
        text-align: center;
        h3{
            @include blackFont(16px);
        }
        h4{
            font-size: 12px;
            color: #999;
        }
    }
}
</style>
