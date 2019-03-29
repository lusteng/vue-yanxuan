
<template>
    <SpaceModule>
        <!-- 
            TODO：规格参数展开操作交互
         -->
        <div class="specification">
            <div class="spec-item">
                <div class="lf">
                    请选择规格数量
                </div>
                <div class="unfold">
                    <i class="iconfont icon-zhankai"></i>
                </div>
            </div>
            <div class="spec-item">
                <div class="lf">
                    领券： 
                    <span class="tag">
                        <ProductTag>每满199减20券</ProductTag>
                    </span>
                    <span class="tag">
                        <ProductTag>每满219减20券</ProductTag>
                    </span>
                </div>
                <div class="unfold">
                    <i class="iconfont icon-zhankai"></i>
                </div>
            </div>
            <div class="spec-item">
                <div class="lf">
                    配送：至  
                </div>
                <div class="unfold">
                    <i class="iconfont icon-zhankai"></i>
                </div>
            </div> 
            <div class="spec-item">
                <div class="lf">
                    积分：购买最高得36积分
                </div>
                <div class="unfold">
                    <i class="iconfont icon-zhankai"></i>
                </div>
            </div>  
            <div class="spec-item ser">
                <div class="lf">
                    <span class="lf-til">
                        服务：
                    </span>
                    <div class="service">
                        <div class="service-item">支持30天无忧退换货</div>
                        <div class="service-item">48小时快速退款</div>
                        <div class="service-item">满88元免邮费</div>
                        <div class="service-item">网易自营品牌</div>
                        <div class="service-item">国内部分地区无法配送</div>
                    </div>
                </div>
                <div class="unfold">
                    <i class="iconfont icon-zhankai"></i>
                </div>
            </div> 
        </div>
    </SpaceModule>
</template>

<script>
import SpaceModule from '@/components/common/SpaceModule'
import ProductTag from '@/components/common/ProductTag'
export default {
    name: "GoodsSpecification",
    components: {
        SpaceModule,
        ProductTag,
    }
}
</script>

<style lang="scss">
    @import '~@/assets/css/mixin'; 
    .spec-item{
        display: flex;
        line-height: 52px;
        padding-left: 15px;
        &.ser{
            padding-top: 12px;
            padding-bottom: 4px;
        }
        &:not(:last-child){
            border-bottom: 1px solid #d9d9d9;
        }
        .lf{
            @include blackFont(14px);
            display: flex;
            flex: 1; 
            .tag{
                margin: 0 5px;
            }
            .service{
                display: inline-block;
                flex: 1;
            }
            .lf-til{
                width: 44px; 
                line-height: 14px;
            }
            .service-item{
                position: relative;
                padding-left: 8px;
                margin-right: 16px;
                float: left;
                line-height: 1;
                margin-bottom: 8px;
                color: #7f7f7f;
                &::after{
                    @include point;
                    position: absolute;
                    top: 5px;
                    left: 0;
                }
            }
        }
        .unfold{ 
            @include flex(center);
            width: 40px; 
        }
    }
</style>
