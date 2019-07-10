<template>
    <section class="freshmanModule">
        <div class="fresh-title">
            <span>新人专享礼包</span>
        </div>
        <div class="fresh-content clearfix">
            <div class="fl space-right">
                <div class="new-bag">
                    <router-link to="/login">
                        <p class="name">新人专享礼包</p>
                        <img v-lazy="`${new_bag}`" />  
                    </router-link>
                </div>
            </div>
            <div class="fr space-left">
                <div class="fresh-module module1 space-bottom">
                    <router-link to="/detail/20152154511">
                        <div class="inner"> 
                            <div class="picWrap">
                                <img v-lazy="`${well}`"/> 
                                <div class="price">
                                    <p class="line line1">¥524</p>
                                    <p class="line line2">¥699</p>
                                </div>  
                            </div>
                            <div class="discount-word"> 
                                <div class="title">福利社</div>
                                <div class="subTitle">今日特价</div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="fresh-module module2 space-top">
                    <router-link to="/item/324234">
                        <div class="inner">
                            <div class="picWrap">
                                <img v-lazy="`${group}`"/> 
                                <div class="price">
                                    <p class="line line1">¥1</p>
                                    <p class="line line2">¥14.9</p>
                                </div>
                            </div>
                            <div class="cnt">
                                <div class="title">新人拼团</div>
                                <div class="tag">1元起包邮</div>
                            </div> 
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import new_bag from 'static/img/new_bag.png'
    import well from 'static/img/well.png'
    import group from 'static/img/group.png'
    export default {
        name: "FreshmanModule",
        data(){
            return {
                new_bag,
                well,
                group,
            }
        } 
    }
</script>

<style lang="scss" scoped> 

    @mixin fontStyle{
        @include blackFont(16px);
    }
    
    .freshmanModule{
        padding: 0 15px 15px;
        background: $white;
        margin: 10px 0; 
        .fresh-title{
            height: 45px;
            line-height: 45px;
            text-align: center;
            @include fontStyle;
            span{ 
                position: relative;
                &::after{
                    right: -17px;
                }
                &::before{ 
                    left: -17px;
                } 
                &::after, &::before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    width: 12px;
                    height: 1.5px;
                    background: $black;
                }
            }
        }   
        .fresh-content{
            height: 217px;
            .fl, .fr{
                width: 50%; height: 100%;  
            } 
            .new-bag{
                background: #F9E9CF;
                height: 100%;
                .name{
                    padding: 15px 0 0 15px;
                    @include fontStyle;
                }
                img{
                    margin: 18.5px 21px;
                    @include block(129px, 128.5px)
                }
            }
            .fresh-module{
                height: 50%;
                position: relative;
                .inner{
                    padding-left: 15px;
                    height: 100%;
                }
                .discount-word{padding-top: 10px;}
                .title{
                    @include fontStyle;
                }
                .subTitle{
                    color: #7F7F7F; 
                    line-height: 24px;
                }
                .tag{
                    @include block(auto, 16px);
                    padding: 0 5px;
                    background: #CBB693;
                    color: #fff;
                    margin-top: 3px; 
                }
                .picWrap{
                    position: absolute;
                    right: 0;
                    top: 8px;
                    width: 100px;
                    .price{
                        @include block(40px, 40px);
                        position: absolute;
                        top: 0;
                        right: 15px;
                        background: #F59524;
                        border-radius: 50%;
                        padding-top: 5px;
                        text-align: center;
                        color: $white;
                        opacity: .8;
                        .line{
                            line-height: 18px;
                            &.line2{
                                text-decoration:line-through;
                                margin-top: -3px;
                            }
                        }
                    }
                    img{
                        @include block(100%, 100px);
                    }
                }
                &.module1 .inner{
                    background: #FBE2D3;
                }
                &.module2 .inner{
                    background: #FFECC2;
                }
            }
        }     
    }
</style>
