<template> 
    <div class="t-item">
        <div class="t-name">
            <span class="ava">
                <img v-lazy="data.tip" alt="">
            </span>
            <span>{{data.til}}</span>
        </div>
        <div class="t-title">{{data.desc}}</div>
        <div class="t-pic">
            <img v-lazy="data.pic" alt="">
        </div>
        <div class="t-rcount">
            <i class="iconfont icon-chakan"></i>
            <span>{{item.look}}人看过</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "OptimalTo",
    props: {
        data: {
            type: Object,
            default(){
                return { 
                    "til": "",
                    "tip": "", 
                    "desc": "", 
                    "pic": "",
                    "look": ""
                }
            }
        }
    }
}
</script>

<style lang="scss"> 
    .t-item{
        padding: 18px 15px;
        margin: 10px 0 10px;
        background: $white; 
        .t-name{
            margin-bottom: 12px; 
            .ava{
                display: inline-block;
                width: 27px;
                height: 27px;
                overflow: hidden;
                border-radius: 50%;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border: .5px solid #d9d9d9;
                margin-right: 6px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            span{
                vertical-align: middle;
            }
        }  
        .t-title{
            font-size: 18px;
            color: $black;
            line-height: 26px;
            margin: -4px 0 8px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical; 
        }
        .t-pic{
            width: 345px;
            height: 188px;
            img{
                width: 100%;
            }
        }
        .t-rcount{
            margin: 9px 0 -8px;
            color: #999;
            font-size: 12px;
            i{
                margin-right: 4px;
            }
            i, span{
                vertical-align: middle;
            }
        }

    }
</style>


