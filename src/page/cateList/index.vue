<template>
    <div>
        <div class="yx-catelist">
            <OnlySearchHeader />
            <div class="ct-box">
                <div class="ct-lf" ref="leftNav">
                    <div>
                        <div 
                            :class="{'ct-nav' : true, 'active' : curRightIndex === index}" 
                            v-for="(item, index) in cateLists.nav" 
                            :key="index"
                            @touchend="handleChangeLeftNav(index)"
                        >{{item.name}}</div>    
                    </div>
                </div>
                <div class="ct-rt" ref="rightContent">
                    <div class="121">
                        <div class="ct-container ct-rt-item" v-for="(item, index) in cateLists.rightCnt" :key="index">
                            <router-link class="banner" to="/">
                                <img v-lazy="item.banner" alt="">
                            </router-link>
                            <div class="ct-inner" v-for="(cateItem, cateIdx) in item.list" :key="cateIdx">
                                <h4 class="ct-til" v-if="cateItem.til">{{cateItem.til}}</h4>
                                <ul class="ct-list">
                                    <li v-for="(liItem, liIdx) in cateItem.cates" :key="liIdx">
                                        <router-link class="ct-item" to="/">
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
export default {
    name: "cateList",
    components: {
        OnlySearchHeader,
        Footer
    },
    computed: {
        ...mapGetters(['cateLists']),
        /** 实时计算右侧滚动块可视索引 */
        curRightIndex(){
            let ind = 0;
            this.heights.forEach((item, index) => {
                if(
                    index < this.heights.length - 2
                &&  this.scrollY >= item
                &&  this.heights[index + 1] > this.scrollY 
                ){
                    ind = index
                }
            })
            return ind;
        }
    },
    data(){
        return {
            heights: [],
            scrollY: 0
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
 
                this.navScroll = new BScroll(this.$refs.leftNav, {
                    // click: true
                })
                this.contentScroll = new BScroll(this.$refs.rightContent, {
                    probeType: 3
                })

                this.contentScroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y));
                })
        },
        _setRightContentHeight(){
            let 
                clds = this.$refs.rightContent.getElementsByClassName('ct-rt-item'),
                hig = 0; 
                this.heights.push(hig)
                for(var i = 0; i < clds.length; i++){
                    hig += clds[i].clientHeight
                    this.heights.push(hig) 
                } 
                console.log(this.heights)
        }, 
        handleChangeLeftNav(cur){
            let 
                clds = this.$refs.rightContent.getElementsByClassName('ct-rt-item'),
                ele = clds[cur]; 
            console.log(this.navScroll)
            this.navScroll.scrollToElement(ele, 300)
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
        padding-top: $lfSpace;
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

