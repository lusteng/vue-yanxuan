/*
 * @Desc: 展示同类商品 
 */

<template>
    <section>
        <div class="cg-head">
            <h3>{{itemData.title}}</h3>
            <h4>{{itemData.subTitle}}</h4>
        </div>
        <div class="cg-list">
            <ProductCard 
                v-for="(item, index) in itemData.list"
                :key="index"
                :productData="item"
                boxHeight="170px"
            />
        </div>
    </section>
</template>

<script>
import ProductCard from '@/components/common/ProductCard'
export default {
    name: "ItemProductBlock",
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
