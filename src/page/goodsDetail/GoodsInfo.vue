<template>
    <section class="goods-view">
        <div class="goods-banner">
            <swiper 
                ref="slideSwiper"
                :options="swiperOption" 
                v-if="banner.length > 1" 
            >
                <swiper-slide 
                    v-for="(item, index) in banner"
                    :key="index"
                    class="view"
                >
                    <img :src="item.picUrl" alt="" />
                </swiper-slide> 
            </swiper> 
            <div class="slide-pager">
                {{slideCurrent}}/{{banner.length}}
            </div> 
        </div>
        <div class="goods-characteristic">
            <div 
                class="item" 
                v-for="(item, index) in characteristic"
                :key="index"
            >
                <div class="pic">
                    <img :src="item.picUrl" />
                </div>
                <div class="word">
                    <p>{{item.text1}}</p>
                    <p>{{item.text2}}</p>
                </div>
            </div>
        </div>
        <div class="goods-price">
            <div class="origin-price">
                &yen;{{price.origin_p}}
            </div>
            <router-link class="super" to="#"> 
                <span>
                    <i class="super-icon"></i>
                    超级会员价&yen;{{price.super_p}}
                </span>
                <span class="fr">
                    立即开通
                    <i class="iconfont icon-zhankai"></i>
                </span>
            </router-link>   
            <div class="goods-info">
                <div class="info">
                    <div class="name text-overflow">
                        {{price.title}}
                    </div>
                    <div class="desc text-overflow">
                        {{price.desc}}
                    </div>
                </div> 
                <router-link class="rate" :to="`/comment/${this.$route.params.id}`">
                    <div class="wrap">
                        <p>{{price.reputatio}}</p>
                        <p>好评率</p>
                    </div>
                    <i class="iconfont icon-zhankai"></i>
                </router-link>  
            </div>
        </div>
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
        },
        characteristic:{ 
            type: Array,
            default(){
                return []
            }
        },
        price:{ 
            type: Object,
            default(){
                return { 
                    origin_p: '',
                    super_p: '',
                    title: '',
                    desc: '',
                    reputatio: '', 
                }
            }
        }
    },
    data(){ 
        let _this = this
        return { 
            swiperOption: {
                loop: true,
                pagination: {
                    el: '.slide-pagination',
                    type: 'fraction'
                }, 
                on: {
                    slideChangeTransitionEnd(){
                        _this.refreshSlideCurrent(this.activeIndex)
                    },
                },
            }, 
            slideCurrent: 1
        }
    }, 
    methods:{ 
        refreshSlideCurrent(activeIndex){ 
            this.slideCurrent = activeIndex
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/mixin'; 
    .goods-banner{
        position: relative;
        height: 375px;
        .swiper-container {
            height: 100%;
        }
        .slide-pager{
            @include block(27px, 16px);
            font-size: 12px;
            line-height: 16px;
            position: absolute;
            right: 15px;
            bottom: 12px;
            left: auto;
            border: 1px solid rgba(0,0,0,.15);
            text-align: center;
            color: $black; 
            background-color: $white;
            border-radius: 4px;
            z-index: 10; 
        }
    }
    .goods-characteristic{
        @include flex;
        background: #F9F9F9;
        padding: 12px 15px;
        .item{
            flex: 1;
            & > div{
                display: inline-block;
            }
            .pic{
                @include block(36px, 36px);
                border-radius: 50%;
                overflow: hidden;
                margin-right: 6px;
            }
            .word{
                @include blackFont(14px);
                line-height: 20px;
                p:first{
                    margin-bottom: 4px;
                }
            }
        }
    }
    .goods-price{
        background: $white;
        padding: 12px 0 12px 14.8px;
        .origin-price{
            color: $yx_theme;
            font-size: 26px;
            line-height: 29px;
        }
        .super{
            display: block;
            @include blackFont(12px);
            margin: 9px 12px 12px 0;
            padding: 0 12px 0 10px;
            height: 30px;
            line-height: 30px;
            background: #F9F5EF;
            i.super-icon{
                @include block(13px, 13px);
                margin-right: 4px;
                background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/supersmall-e6d0487610.png'); 
                background-size: cover;
                vertical-align: middle;
                margin-top: -2px;
            }
            i.iconfont{
                font-size: 12px;
            }
        }
        .goods-info{
            display: flex;
            .info{
                flex: 1; 
                padding-right: 12px;
                .name{
                    @include blackFont(16px);
                    line-height: 24px;
                }
                .desc{
                    color:#7f7f7f;
                    font-size: 12px;
                }
            }   
            .rate{  
                @include flex(center);
                width: 89px; 
                background-image: linear-gradient(to bottom,#d9d9d9 43%,rgba(255,255,255,0) 0);
                background-size: 1px 12px;
                background-repeat: repeat-y;
                .wrap{ 
                    p:first-child{
                        color: $yx_theme;
                        font-size: 16px;
                        line-height: 22px;
                    }
                    p:last-child{
                        color: #7F7F7F;
                        font-size: 12px;
                    }
                }
            }    
        } 
    }
</style>
