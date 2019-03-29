<template>
    <span :class="classes">
        <slot></slot>
    </span>
</template>

<script>  
import {oneOf} from '@/utils'

const tagClass = 'product-tag';
export default {
    name: "ProductTag",
    props: {
        type: {
            type: String,
            validator (value) {
                return oneOf(value, ['default', 'disabled']);
            },
            default: 'default'
        },
        size: { 
            type: String,
            validator (value) {
                return oneOf(value, ['sm', 'lg', 'default']);
            },
            default: 'default'
        }
    },
    computed:{
        classes(){
            return [
                `${tagClass}`,
                `${tagClass}-${this.type}`,
                {
                    [`${tagClass}-${this.size}`]: this.size !== 'default'
                }
            ]
        }
    }
}
</script>


<style lang="scss">
    @import '~@/assets/css/mixin';
    $paddingSize: 4px;
    $paddingSize-lg: 8px;
    .product-tag{
        display: inline-block; 
        line-height: 15px;
        border: 1px solid $yx_theme;
        color: $yx_theme;
        padding: 0 $paddingSize;
        font-size: 12px;
        &.product-tag-disabled{
            border-color: $gray_light;
            color: $gray_light;
        }
        &.product-tag-lg{ 
            padding: $paddingSize-lg / 2 $paddingSize-lg;
        }
    }
</style>
