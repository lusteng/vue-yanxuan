/*
 * @Desc: 顶部空白10px布局块 
 */

<template>
    <section class="yx-space">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: "SpaceModule"
}
</script>

<style lang="scss"> 
.yx-space{
    margin-top: 10px;
    background: $white;
}
</style>

