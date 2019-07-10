<template>
    <SpaceModule>
        <div class="gc-box">
            <div class="gc-head clearfix">  
                用户评价({{comment.comment_n}})
                <router-link class="unfold fr" :to="`/comment/${this.$route.params.id || '0'}`">
                    <span>
                        <em>{{comment.rate}}</em>好评率                    
                    </span>
                    <i class="iconfont icon-zhankai"></i>
                </router-link>
            </div>
            <div class="gc-detail">
                <CommentModule 
                    v-for="(item, index) in comment.result"
                    :key="index"
                    :data="item"
                />
            </div>
        </div>
    </SpaceModule>
</template>

<script>
import SpaceModule from '@/components/common/SpaceModule'
import CommentModule from '@/components/common/CommentModule'
export default {
    name: "GoodsComment",
    props: {
        comment: {
            type: Object,
            default(){
                return {  
                    comment_n: '',
                    rate: '',
                    result: [], 
                }
            }  
        }
    },
    components: {
        SpaceModule,
        CommentModule,
    }
}
</script>

<style lang="scss">  
    .gc-box{
        .gc-head, .gc-detail{
            padding:0 15px;
        }
        .gc-head{
            @include blackFont;
            line-height: 46px;
            height: 46px;
            em{
                color: $yx_theme;
            }
            span{
                font-size: 14px;
            }
        } 
    }
</style>

