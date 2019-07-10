<template>
    <ProductShowContainer
        title="类目热销榜"
    >
        <section class="hotSell">
            <ul>
                <li 
                    class="item top"
                    :key="`top${index}`" 
                    v-for="(item, index) in hotSalls.hot"
                >
                    <router-link to="/manufacturer/3" class="inner">
                        <div class="name">
                            <span>
                                {{item.name}}
                            </span>
                        </div>
                        <div class="picWrap">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                    </router-link>
                </li>
                <li 
                    class="item rank"
                    :key="`rank${index}`" 
                    v-for="(item, index) in hotSalls.ranks"
                >
                    <router-link :to="`/item/${index + 1}`" class="inner">
                        <p class="name">
                            {{item.name}}
                        </p>
                        <div class="picWrap">
                            <img :src="item.picUrl" alt="" />
                        </div>
                    </router-link>
                </li> 
            </ul>
        </section>
    </ProductShowContainer>
</template>

<script>
import { mapGetters } from 'vuex' 
import ProductShowContainer from '@/components/common/ProductShowContainer'
export default {
    name: "HotSell",
    computed: {
        ...mapGetters(['hotSalls'])
    },
    components: {  
        ProductShowContainer
    },
    data(){
        return {
            
        }
    },
    created(){
        this.$store.dispatch('fetchHotSallProduct')
    }
}
</script>

<style lang="scss" scoped> 
    $blockSpace : 0px;
    .hotSell{ 
        ul{   
            @include flex;
            flex-wrap: wrap;
            li.item{
                // margin-right: $blockSpace;
                &.top{
                    // margin-bottom: $blockSpace; 
                    width: 50%;
                    height: 100px;
                    position: relative;
                    .picWrap{
                        width: 100px; 
                        height: 100%;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                    .name{
                        @include blackFont;
                        padding: 33px 0 0 12px; 
                        span{
                            &::after{
                                content: '';
                                margin-top:5px; 
                                display: block;
                                width: 24px;
                                height: 2px;
                                background: $black;
                            }
                        }
                    }
                    &:nth-of-type(1){
                        background:#F9F3E4; 
                    }
                    &:nth-of-type(2){
                        background: #EBEFF6;
                    }
                }
                &.rank{
                    width: 25%;
                    height: 90px;
                    background: $gyBackgroud;
                    .name{
                        @include blackFont(12px);
                        padding-top: 5px;
                        line-height: 18px;
                        text-align: center;
                    }
                    .picWrap{
                        width: 60px;
                        height: 60px;
                        margin: 0 auto; 
                    }
                }
                img{ 
                    @include block(100%, 100%);
                }
            }
        }
    }
</style>
