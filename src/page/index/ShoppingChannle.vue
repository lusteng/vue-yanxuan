<template>
    <section class="shoppingChannle">
        <!-- 服务 -->
        <ul class="yx-service">
            <li>
                <!-- <i class="iconfont icon-tubiao-"></i> -->
                <span>网易自营品牌</span>            
            </li> 
            <li>
                <!-- <i class="iconfont icon-65"></i> -->
                <span>30天无忧退货</span>            
            </li> 
            <li>
                <!-- <i class="iconfont icon-10"></i> -->
                <span>48小时快速退款</span>            
            </li> 
        </ul>
        <!-- 快速直达频道 -->
        <div class="yx-channles">
            <ul>
                <li 
                    v-for="(item, index) in channelDatas"
                    :key="index"
                >
                    <!-- TODO：礼品 超级会员页面 -->
                    <router-link :to="`/item/${item.sequen > 8 ? '' : item.sequen}`">
                        <img v-lazy="item.picUrl" :key="item.picUrl"/>
                        <p class="yx-channle-name">
                            {{item.name}}
                        </p> 
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "ShoppingChannle",
        computed: {
            ...mapGetters(['channelDatas'])
        },
        created(){
            this.$store.dispatch('fetchShoppingChannel')
        }
    }
</script>

<style lang="scss" scoped> 
    .shoppingChannle{
        background: $white;
    }
    .yx-service{
        height: 36px;
        line-height: 36px;
        padding: 0 15px;  
        @include flex;
        li{
            flex: 1;
            text-align: center;
            color: $yx_theme;
            i{
                vertical-align: top;
                margin-right: 4px;
            }
        }
    }
    .yx-channles{
        ul{
            @include flex;
            flex-wrap: wrap;
            li{
                width: 20%;
                padding: 5px 10px 4.5px;
                a{ 
                    display: inline-block;
                    width: 100%;
                    height: 55px;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
                .yx-channle-name{
                    @include block(100%, 18px);
                    padding-top: 5px;
                    line-height: 18px;
                    text-align: center;
                    font-size: 12px;
                    color: #333333;
                }
            }
        }
    }
</style>
