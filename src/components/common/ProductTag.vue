<template>
    <span class="product-tag">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: "ProductTag"
}
</script>


<style lang="scss">
    @import '~@/assets/css/mixin';
    .product-tag{
        display: inline-block;
        height: 15px;
        line-height: 15px;
        border: 1px solid $yx_theme;
        color: $yx_theme;
        padding: 0 4px;
        font-size: 12px;
    }
</style>
