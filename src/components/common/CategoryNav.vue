<template>
    <section class="top-nav"> 
        <div class="top-nav-list"> 
            <swiper :options="swiperOption">
                <swiper-slide
                    v-for="(item, index) in topNavOptions"
                    :key="index"
                    :class="{'top-nav-item': true, active: navSelected == index}"
                >
                    <router-link
                        :to="index == 0 ? '/' : `/item/${index}`"
                    >{{item.name}}</router-link>
                </swiper-slide> 
            </swiper> 
        </div>    
        <div :class="{dropNavWrap: true, showCateDropdown}">
            <div class="shadowMask"></div>
            <div class="dropIcon" @click="handleToggleNav">
                <i class="iconfont icon-xiala"></i>
            </div>
        </div>
        <div v-show="showCateDropdown" class="cates">
            <p class="cateDropTil">全部频道</p>
            <span  
                v-for="(item, index) in topNavOptions"
                :key="index"
                :class="{'cateTag': true, active: navSelected == index}"
                @click="handleSkipTag(index)"    
            >{{item.name}}</span>
        </div>
        <div  v-show="showCateDropdown" class="cateMask" @click="handleToggleNav"></div>
    </section>    
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "CategoryNav", 
    computed: {
        ...mapState({
            topNavOptions: state => state.Home.topNavOptions
        })
    },
    data(){
        const navSelected = this.$route.params.index ? this.$route.params.index : 0;
        return { 
            swiperOption: {
                slidesPerView: 'auto',
                freeMode: true,
                initialSlide: navSelected,
            },
            showCateDropdown: false,
            navSelected 
        }
    }, 
    watch: {
        '$route'(to, from){  
            this.navSelected = to.params.index ? to.params.index : 0 
        }
    },
    methods: {
        handleSkipTag(index){
            let path = index == 0 ? '/' : `/item/${index}`; 
            this.showCateDropdown = false
            this.$router.push({path})
        },
        handleToggleNav(){
            this.showCateDropdown = !this.showCateDropdown; 
        }
    }
}
</script>

<style lang="scss" scoped> 
    .top-nav{ 
        background: $white;
        position: relative;
        .top-nav-list{
            height: 30px;
            line-height: 30px;
            padding-right: 60px;
            padding-left: 15px;
            border-bottom: 1px solid $gray;
            .top-nav-item.swiper-slide{
                display: inline-block;
                font-size: 14px;
                padding: 0 8px; 
                color: $black;
                width: auto;
                &.active{ 
                    position: relative;
                    a{
                        color: $yx_theme;
                    }
                    &::after{
                        content: ' ';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 2px;
                        background-color: $yx_theme;
                    }
                }
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
                &.active{
                    color: $yx_theme;
                    border-color: $yx_theme;
                }
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
