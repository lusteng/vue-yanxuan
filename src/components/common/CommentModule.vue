/*
 * @Desc: 商品评论展示块 
 */

<template> 
    <div :class="classes">
        <div class="yx-comment-head">
            <img :src="data.frontUserAvatar" />
            <span class="userName">{{data.frontUserName}}</span>
            <div class="star">
                <van-rate 
                    v-model="data.star"
                    :size="14"
                />
            </div>
        </div>
        <div class="yx-comment-extra">
            <span class="time">{{data.createTime | timeFormat}}</span>
            <span v-show="data.skuInfo.length > 0" class="skus">
                <em
                    v-for="(sku, index) in data.skuInfo"
                    :key="index"
                >
                    {{sku}}
                    <i v-if="index < data.skuInfo.length - 1">;</i>
                </em>
            </span>
        </div>
        <div class="yx-comment-content">{{data.content}}</div>
        <ul class="yx-comment-pic">
            <li v-for="(pic, index) in data.picList" :key="index">
                <img v-lazy="pic" />
            </li>
        </ul>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: "CommentModule",   
    props: {
        data: { 
            frontUserAvatar: '', 
            frontUserName: '',
            star: 0,
            createTime: '',
            skuInfo: [],
            content: '',
            picList: []
        },
        outterClass: [String, Boolean]
    }, 
    computed: {
        classes(){
            return [
                'yx-comment',
                `${this.outterClass || ''}`
            ]
        }
    },
    filters: {
        timeFormat(t){
            return t ? moment(t).format('YYYY-MM-DD hh:mm:ss') : ''
        }
    }
}
</script>

<style lang="scss"> 
.yx-comment{
    border-top: 1px solid $gray;
    padding-bottom: 5px;
    .yx-comment-head{
        @include blackFont(12px);
        padding-top: 15px;
        padding-bottom: 2px;
        line-height: 30px;
        height: 47px;
        img, .star{
            vertical-align: middle;
        }
        img{
            @include block(32px, 32px);
            border-radius: 50%;
            margin-right: 4px;
        }
        .userName{
            margin-right: 6px;
        }
        .star{
            display: inline-block;
        }
    }
    .yx-comment-extra, .yx-comment-content{
        margin-top: 9px;
    }
    .yx-comment-extra{
        color: $gray_light;
        font-size: 12px;
        .time{
            margin-right: 8px;
        }
    }
    .yx-comment-content{
        @include blackFont;
    }
    .yx-comment-pic{
        @include flex(flex-start);
        flex-wrap: wrap;
        padding: 11px 0 3px 0;
        li{
            @include block(73px, 73px);
            margin-right: 12px;
            margin-bottom: 10px;
            border: 1px solid $gray;
        }
    }
}
</style>

