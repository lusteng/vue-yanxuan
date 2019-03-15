/*
 * @Desc: 商品展示块 
 */

<template>  
    <div :class="`yx-card ${outterClass}`">
        <div class="yx-card-box">
            <div 
                class="yx-card-pic"
                :style="{height: boxHeight ? boxHeight : '100px'}"
            >
                <img v-lazy="productData.picUrl" :key="productData.picUrl" />
                <SpecificationLabel 
                    v-if="productData.spec"
                    outerClass="yx-card-spec"
                >{{productData.spec}}</SpecificationLabel>
            </div>
            <div v-if="productData.desc" class="yx-card-desc text-overflow">{{productData.desc}}</div>
        </div>
        <div class="yx-card-title">
            {{productData.title}}  
            <span 
                class="yx-card-price"
                v-if="productData.price || productData.discount" 
            >
                <em>￥{{productData.price}}</em>
                <em v-if="productData.discount">￥{{productData.discount}}</em>
            </span>
        </div>
        <div v-if="productData.tag" class="yx-card-tag">
            <ProductTag>{{productData.tag}}</ProductTag>
        </div>
    </div>
</template>

<script>
import ProductTag from '@/components/common/ProductTag'
import SpecificationLabel from '@/components/common/SpecificationLabel'
export default {
    name: "ProductCard",
    components: {
        ProductTag,
        SpecificationLabel
    },
    props: {
        productData: {
            type: Object,
            default(){
                return { 
                    title: "",  
                    sub_title: "",
                    picUrl: "",
                    tag: "",
                    price: "",
                    discount: ""
                }
            },     
        },
        boxHeight: String,
        outterClass: String,
    }

}
</script>

<style lang="scss">
    @import '~@/assets/css/mixin';
    .yx-card{
        width: 100%;
        .yx-card-box{
            margin-bottom: 6px;
        }
        .yx-card-pic{
            background: $gyBackgroud;
            position: relative; 
            .yx-card-spec{
                position: absolute;
                top: 10%;
                left: 5%;
            }
            img{
                height: 100%;
            }
        }
        .yx-card-desc{
            background: #F1ECE2;
            color: #9F8A60;
            padding: 0 5px; 
            height: 24px;
            line-height: 24px;
        }
        .yx-card-title{
            @include blackFont(12px);
            line-height: 18px;
            padding-right: 4px;
            p{
                display: inline-block;
            }
        }
        .yx-card-price{
            em:nth-of-type(1){
                color: $yx_theme;
            }
            em:nth-of-type(2){
                color: #999;
                text-decoration: line-through;
            }
        }
        .yx-card-tag{
            margin: 2.5px 0; 
        }
    }
</style>
