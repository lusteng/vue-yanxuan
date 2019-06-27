<template>
    <ProductShowContainer
        title="品牌制造商直供"
        more="#1"
    >
         <ul class="brandMade clearfix">
             <li class="bm-item space-right space-bottom">
                <router-link to="/manufacturer/0">
                    <div class="inner">
                        <h4>海外制造商</h4>
                        <div class="cnt">
                            <span>9.9</span>
                            <span>元</span>
                            <i>上新</i>
                        </div>
                    </div>
                </router-link>
             </li>
             <li class="bm-item space-left space-bottom">
                <router-link to="/manufacturer/1">
                     <div class="inner">
                        <h4>CK制造商</h4>
                        <div class="cnt">
                            <span>25</span>
                            <span>元起</span>
                            <i>上新</i>
                        </div>
                    </div>
                </router-link>
             </li>
             <li class="bm-item space-right space-top">
                <router-link to="/manufacturer/2">
                     <div class="inner">
                        <h4>新秀丽制造商</h4>
                        <div class="cnt">
                            <span>34.9</span>
                            <span>元起</span> 
                        </div>
                    </div>
                </router-link>
             </li>
             <li class="bm-item space-left space-top">
                <router-link to="/manufacturer/3">
                     <div class="inner">
                        <h4>Nine West制造商</h4>
                        <div class="cnt">
                            <span>219</span>
                            <span>元起</span> 
                        </div>
                    </div>
                </router-link>
             </li>
         </ul>
    </ProductShowContainer>    
</template>

<script>
import ProductShowContainer from '@/components/common/ProductShowContainer'
export default {
    name: "BrandMade",
    components: {  
        ProductShowContainer
    },
    data(){
        return {
            
        }
    }    
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/css/mixin'; 
    .brandMade{ 
        li.bm-item{
            float: left;
            width: 50%;
            height: 130px;  
            .inner{
                width: 100%;
                height: 100%;
            }
            @for $i from 1 to 5{
                &:nth-child(#{$i}) .inner{
                    background: url('~static/img/brand/brand_#{$i}.png');
                    background-size: 100% 100%; 
                }
            } 
            h4{
                padding-top: 10px;
                margin-bottom: 1px;
                font-size: 14px;
                color: $black;
                text-align: center;
            }
            .cnt{
                text-align: center;
                span{
                    color: #7F7F7F;
                    font-size: 12px;
                }
                i{
                    display: inline-block;
                    margin-left: 4px;
                    height: 16px;
                    line-height: 16px;
                    padding: 0 5px;
                    color: $white;
                    background: #CBB693;
                    border-radius: 2px;
                }
            }
        }
    }
</style>


