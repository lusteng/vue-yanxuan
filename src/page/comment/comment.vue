<template>
    <div>
        <Header />
        <div class="yx-cm">
            <!-- TODO 评分聚合到接口 -->
            <div class="yx-cm-hd">
                评分  
                <div class="star">
                    <van-rate 
                        v-model="rate"
                        :size="18"
                    />
                </div>
                99.5%好评
            </div>
            <div class="yx-cm-tag"> 
                <ProductTag
                    v-for="(tag, index) in product_cmt_tags"
                    :key="index"
                    :type="tagCurrent == index ? 'default' : 'disabled'"
                    size="lg"
                    @click.native="handleRequestComment(index, tag.name)"
                    class="tg"
                >{{tag.name}}({{tag.strCount}})</ProductTag>
            </div> 
            <div class="yx-cm-list">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    :error.sync="error"
                    error-text="请求失败，点击重新加载"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <CommentModule
                        v-for="(item, index) in product_cmts"
                        :key="index"
                        :data="item"
                        :outterClass="index === 0 && 'norBorder'"
                    />
                </van-list>    
            </div>
        </div>
        <GoTop />
    </div>
</template>

<script>
import Header from '@/layout/header/SimpleHeader'
import ProductTag from '@/components/common/ProductTag'
import CommentModule from '@/components/common/CommentModule'
import GoTop from '@/components/common/GoTop'
import { mapGetters } from 'vuex'

export default {
    name: "comment",
    computed: {
        ...mapGetters(['product_cmts', 'product_cmt_tags'])
    },
    components: {
        Header,
        ProductTag,
        CommentModule,
        GoTop,
    },
    data(){
        return {
            tagCurrent: 0,
            page: 1,
            type: '',
            rate: 5,
            
            loading: false,
            finished: false,
            error: false,
        }
    },
    watch: {
        product_cmts(list){
            if(list.length === 0) this.finished = true 
        }
    },
    created(){  
        this.$store.dispatch('fetchCommentTags',
        {
            id: this.$route.params.id
        }) 
    },
    methods:{
        fetchCommentDatas(cb){ 
            let 
                _this = this,
                id = _this.$route.params.id,
                page = _this.page,
                reset = _this.type && _this.page == 1, 
                type = _this.type === '全部' ? '' : _this.type,
                condition = {
                    params: {
                        id,
                        page,
                        type
                    },
                    reset,
                    cb,
                    errCb(){
                        _this.error = true
                        _this.loading = false
                    }
                };
            _this.$store.dispatch('fetchComments', condition)
        },
        handleRequestComment(ind, name){  
            this.tagCurrent = ind
            this.type = name 
            this.finished = false
            this.page = 1
            this.fetchCommentDatas();
            this.page = 2
        }, 
        //瀑布流加载
        onLoad() {
            let _this = this
            _this.loading = true
            _this.fetchCommentDatas(() => { 
                _this.loading = false;
                if(_this.page > 4){
                    _this.finished = true
                } 
            }) 
            _this.page += 1
        }
    }
}
</script>

<style lang="scss" scoped> 
    .yx-cm{
        background: $white;    
        .yx-cm-hd,
        .yx-cm-tag, 
        .yx-cm-list{
            padding:0 15px; 
        }
        .yx-cm-hd{
            @include blackFont(14px);
            padding-top: 15px; 
            .star{ 
                display: inline-block;
                vertical-align: middle;
                margin: 0 5px;
            }
        }
        .yx-cm-tag{
            padding-bottom: 15px;
            .tg{
                margin: 16px 16px 0 0;
            }
        }
        .yx-cm-list{
            border-top: 1px solid $gray;
            .norBorder{
                border-top: 0;
            }
        }
    }
</style>
