<template>
    <section class="banner"> 
        <swiper :options="swiperOption" v-if="bannerDatas.length > 1">
            <swiper-slide 
                v-for="(item, index) in bannerDatas"
                :key="index"
                class="banner-item"
            >
                <img :src="item.src" alt="" />
            </swiper-slide> 
            <div class="swiper-pagination" slot="pagination"></div> 
        </swiper> 
    </section>    
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['bannerDatas'])
        },
        data(){
            return {
                swiperOption: { 
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }  
                }
            }
        },
        created(){
            this.$store.dispatch('fetchBannerData', {
                index: 1
            })
        }
    }   
</script>

<style lang="scss">
    @import '~@/assets/css/mixin';
    .banner{
        width: 100%;
        height: 185px;
        .banner-item{
            img{
                height: auto;
                width: 100%;
            }
        }
        .swiper-container{
            height: 100%; 
            .swiper-pagination-bullet{
                @include block(20px, 2px);
                background: $white;
                opacity: .4;
                border-radius: 0;
                &.swiper-pagination-bullet-active{
                    opacity: 1;
                }
            }
        }
    }
</style>
    