<template>
    <div>
        <div class="yx-catelist">
            <OnlySearchHeader />
            <div class="ct-box">
                <div class="ct-lf" ref="leftNav">
                    <div class="inner">
                        <div 
                            :class="{'ct-nav' : true, 'active' : curRightIndex === index}" 
                            v-for="(item, index) in cateLists.nav" 
                            :key="index"
                            @touchend="handleChangeLeftNav(index)"
                        >{{item.name}}</div>    
                    </div>
                </div>
                <div class="ct-rt" ref="rightContent">
                    <div>
                        <div class="ct-container ct-rt-item" v-for="(item, index) in cateLists.rightCnt" :key="index">
                            <router-link class="banner" :to="`/item/${Math.ceil(Math.random() * 9)}`">
                                <img v-lazy="item.banner" alt="">
                            </router-link>
                            <div class="ct-inner" v-for="(cateItem, cateIdx) in item.list" :key="cateIdx">
                                <h4 class="ct-til" v-if="cateItem.til">{{cateItem.til}}</h4>
                                <ul class="ct-list">
                                    <li v-for="(liItem, liIdx) in cateItem.cates" :key="liIdx">
                                        <router-link class="ct-item" :to="`/item/${Math.ceil(Math.random() * 9)}`">
                                            <img v-lazy="liItem.picUrl" alt="" />
                                            <p>{{liItem.text}}</p>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>          
            </div>
        </div>    
        <Footer /> 
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Footer from '@/layout/footer/Footer'
import OnlySearchHeader from '@/layout/header/OnlySearchHeader'
import BScroll from 'better-scroll'
import { throttle } from '@/utils'

export default {
    name: "cateList",
    components: {
        OnlySearchHeader,
        Footer
    },
    computed: {
        ...mapGetters(['cateLists']), 
    },
    data(){
        return {
            higs: [],
            scrollY: 0,
            curRightIndex: 0, 
            touchSwicth: false, 
        }
    },
    watch:{
        scrollY(val){ 
            let 
                _this = this,
                ind = 0,
                higs = _this.higs;    
            if(_this.touchSwicth) return
            higs.forEach((item, index) => {
                if(
                        index < higs.length - 1
                    &&  val >= item
                    &&  val < higs[index + 1]   
                ){
                    ind = index
                }
            }) 
            if(_this.curRightIndex !== ind){
                _this.curRightIndex = ind
                _this._setLeftNavVertical(ind)
            } 
        }
    },
    created(){
        let _this = this;
        _this.$store.dispatch('fetchCateList', {
            cb(){
                _this.$nextTick(() => {
                    _this._initScroll()
                    _this._setRightContentHeight()
                })
            }
        })
    }, 
    methods: {
        _initScroll(){  
                let _this = this
                _this.navScroll = new BScroll(_this.$refs.leftNav, { 
                })
                _this.contentScroll = new BScroll(_this.$refs.rightContent, {
                    probeType: 3,
                    taps: true,
                    click: true
                })
 
                let setScrollY = throttle((pos) => { 
                    _this.scrollY = Math.abs(Math.round(pos.y));
                })  
                _this.contentScroll.on('scroll', setScrollY)
                _this.contentScroll.on('scrollEnd', () => { 
                    if(_this.touchSwicth) _this.touchSwicth = false
                })
        },
        _setRightContentHeight(){
            let 
                clds = this.$refs.rightContent.getElementsByClassName('ct-rt-item'),
                hig = 0; 
                this.higs.push(hig) 
                for(var i = 0; i < clds.length; i++){
                    hig += clds[i].clientHeight
                    this.higs.push(hig) 
                } 
        }, 
        _setLeftNavVertical(cur){
            let 
                $leftNav = this.$refs.leftNav,
                leftNavHig = $leftNav.clientHeight,
                leftNavBarHig = $leftNav.getElementsByClassName('inner')[0].clientHeight,  
                curEl = $leftNav.getElementsByClassName('ct-nav')[cur],
                curElHig = curEl.clientHeight,
                curElTop = curEl.offsetTop,
                scrollTo = Math.ceil(leftNavHig / 2 - curElTop - curElHig); 
                // 位于中间菜单项选中居中
                console.log(scrollTo, leftNavBarHig);
                if(scrollTo > 0){
                    scrollTo = 0
                }else if(Math.abs(scrollTo) > leftNavBarHig - leftNavHig){
                    scrollTo = - (leftNavBarHig - leftNavHig)
                }  
                console.log(scrollTo);
                this.navScroll.scrollTo(0, scrollTo, 400) 
        },
        handleChangeLeftNav(cur){
            let 
                _this = this,
                clds = _this.$refs.rightContent.getElementsByClassName('ct-rt-item'),
                ele = clds[cur];       
            _this.curRightIndex = cur            
            _this.contentScroll.scrollToElement(ele, 300)
            _this._setLeftNavVertical(cur)
            _this.touchSwicth = true
        }
    }
}
</script>

<style lang="scss">
@import '~@/assets/css/mixin';
$lfSpace: 20px; 
$tilPaddingBottom: 4px;
$imgSize: 72px;
.ct-box{
    position: absolute;
    top: 48px;
    bottom: 48px;
    overflow: hidden;
    background: $white;
    border-top: 1px solid $gray;
    display: flex;
    .ct-lf{
        width: 81px; 
        margin-top: $lfSpace; 
        .ct-nav{
            @include blackFont;
            margin-bottom: $lfSpace;
            height: 25px;
            line-height: 25px;
            text-align: center;
            &.active{
                color: $yx_theme;
                border-left: 2px solid $yx_theme;
            }
        }
    }
    .ct-rt{
        flex: 1;
        margin-top: 15px;
        padding: 15px;
        .banner{
            @include block(100%, 96px);
            margin-bottom: 16px;
        }
        .ct-inner{
            .ct-til{
                @include blackFont;
                height: 20px + $tilPaddingBottom;
                line-height: 20px; 
                padding-bottom: $tilPaddingBottom;
                border-bottom: 1px solid $gray;
                margin-bottom: 12px;
            }
            .ct-list{
                display: flex;
                flex-wrap: wrap; 
                li{
                    width: 33.333%;
                    padding-bottom: 20px;
                    .ct-item{
                        @include block($imgSize, 100%);
                    }
                    img{
                        height: $imgSize;
                    }
                    p{
                        @include blackFont(12px);
                        line-height: 20px;
                        text-align: center; 
                    }
                }
            }
        }
    }
}
</style>

