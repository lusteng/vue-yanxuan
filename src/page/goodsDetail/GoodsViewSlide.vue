<template>
    <section class="goodsBanner">
        <swiper 
            :options="swiperOption" 
            v-if="banner.length > 1"
            @slideChange="handleSlideChange"
        >
            <swiper-slide 
                v-for="(item, index) in banner"
                :key="index"
                class="view"
            >
                <img :src="item.picUrl" alt="" />
            </swiper-slide> 
            <div class="slide-pagination" slot="pagination"></div> 
        </swiper> 
    </section>    
</template>

<script>
export default {
    props: {
        banner:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return { 
            swiperOption: {
                pagination: {
                    el: '.slide-pagination',
                    type: 'fraction'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            }
        }
    },
    methods:{
        handleSlideChange(ind){
            console.log(ind)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/mixin'; 
    .goodsBanner{
        position: relative;
        .slide-pagination{
            @include block(27px, 16px);
            font-size: 12px;
            line-height: 16px;
            position: absolute;
            right: 10px;
            bottom: 5px;
            left: auto;
            border: 1px solid rgba(0,0,0,.15);
            text-align: center;
            color: $black; 
            background-color: $white;
            border-radius: 4px;
            z-index: 10; 
        }
    }
</style>
