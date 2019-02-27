<template>
    <section class="top-nav"> 
        <div class="top-nav-list"> 
            <swiper :options="swiperOption">
                <swiper-slide
                    v-for="(item, index) in topNavOptions"
                    :key="index"
                    class="top-nav-item"
                >
                    <div>{{item.name}}</div>
                </swiper-slide> 
            </swiper> 
        </div>    
        <div :class="{dropNavWrap: true, showCateDropdown}">
            <div class="shadowMask"></div>
            <div class="dropIcon" @touchstart="handleToggleNav">
                <i class="iconfont icon-xiala"></i>
            </div>
        </div>
        <div v-show="showCateDropdown" class="cates">
            <p class="cateDropTil">全部频道</p>
            <div 
                v-for="(item, index) in topNavOptions"
                :key="index"
                class="cateTag"
            >{{item.name}}</div>
        </div>
        <div  v-show="showCateDropdown" class="cateMask" @touchstart="handleToggleNav"></div>
    </section>    
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "CategoryNav", 
    computed: {
        ...mapState({
            topNavOptions: state => state.Index.topNavOptions
        })
    },
    data(){
        return { 
            swiperOption: {
                slidesPerView: 'auto',
                freeMode: true,
            },
            showCateDropdown: false,
        }
    }, 
    methods: {
        handleToggleNav(){
            this.showCateDropdown = !this.showCateDropdown; 
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/mixin';
    .top-nav{ 
        background: $white;
        position: relative;
        .top-nav-list{
            height: 30px;
            line-height: 30px;
            padding-right: 50px;
            padding-left: 15px;
            .top-nav-item.swiper-slide{
                display: inline-block;
                font-size: 14px;
                padding: 0 8px; 
                color: $black;
                width: auto;
                &:not(:first-child){
                    margin-left: 10px;
                }
            }
        }
        .dropNavWrap{
            @include block(80px, 30px);
            position: absolute;
            top: 0; 
            right: 0;
            z-index: 12;
            .shadowMask{
                @include block(30px, 30px); 
                background: linear-gradient(to right,rgba(255,255,255,0) 0, $white 100%); 
                vertical-align: bottom;
            }
            .dropIcon{ 
                @include block(50px, 30px);  
                text-align: center;
                line-height: 30px;
            } 
            i{
                display: inline-block;
                transition: .3s;
            }
            &.showCateDropdown{
                i{
                    transform: rotate(180deg)
                }
            }
        }           
        .cates{
            position: absolute;
            top: -0px; 
            left: 0;
            z-index:2;
            background: $white;
            .cateDropTil{
                font-size: 14px;
                height: 30px;
                line-height: 30px;
                padding-left: 15px;
                margin-bottom: 12px;
            }
            .cateTag{
                @include block(73px, 26px);
                text-align: center;
                line-height: 26px;
                margin: 0 0 20px 15px; 
                border: 1px solid #ccc;
                background: #FAFAFA;
            }
        }
        .cateMask{
            @include posFixed(-1);
            width: 100%;
            height: 100%;
            background:rgba(0,0,0,.5); 
        }
    }
</style>
