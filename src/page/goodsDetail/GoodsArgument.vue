<template>
    <SpaceModule>
        <div class="ga-box">
            <div class="ga-head">
                商品参数
            </div> 
            <div class="ga-list">  
                <div class="ga-item" v-for="(item, index) in args" :key="index">
                    <span class="lf">{{item.name}}</span>
                    <span class="rt">{{item.cnt}}</span>
                </div>
            </div>
        </div>
    </SpaceModule>
</template>

<script>
import SpaceModule from '@/components/common/SpaceModule'
export default {
    name: "GoodsArgument",
    components:{
        SpaceModule,
    },
    props: {
        args: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/mixin';  
.ga-box{
    background: $white;
    padding: 16px;
    .ga-head{
        @include blackFont;
        padding-top: 10px; 
        line-height: 40px;
    }
    .ga-item{
        background-image: linear-gradient(to right,#919191 33%,rgba(255,255,255,0) 0);
        background-position: top;
        background-size: 12px 1px;
        background-repeat: repeat-x;
        padding: 5px 16px 5px 0;
        line-height: 24px;
        .lf{
            width: 81px;
            font-size: 13px; 
            color: #999;
            display: inline-block;
        }
        .rt{
            @include blackFont(13px);
        }
    }
}
</style>



