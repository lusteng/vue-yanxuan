 <template>
     <div class="yx-search">
        <div class="yx-search-box clearfix">
            <div class="yx-search-ipt">
                <i class="iconfont icon-sousuo-copy"></i>
                <input type="text" :placeholder="`${search_kd.defaultKeyword && search_kd.defaultKeyword.keyword}`"/>
            </div> 
            <span class="fr yx-search-cancel" @touchend="handleGoBack">取消</span>
        </div>
        <div 
            v-if="storage_search" 
            class="yx-search-history"
        >    
            <div class="yx-search-delete clearfix">
                <span class="fl">历史记录</span>
                <i class="iconfont icon-shanchu fr" @touchend="handleCancelHistory"></i>
            </div>
            <div> 
                <ProductTag
                    v-for="(tag, index) in storage_search"
                    :key="index"
                    type="disabled"
                    size="lg"
                    @touchend.native="handleSkipSearchWord(tag)"
                    class="tg"
                >{{tag}}</ProductTag>
            </div>
        </div>
        <div class="yx-search-list">

        </div>
     </div>
 </template>

 <script>
import { mapGetters } from 'vuex'
import ProductTag from '@/components/common/ProductTag'
export default {
     name: "search",
     components: {
         ProductTag,
     },
     data(){
        return {
            storage_search: JSON.parse(localStorage.getItem('_search_history'))
        }
     },
     computed: {
         ...mapGetters(['search_kd'])
     },
     created(){
        this.$store.dispatch('fetchSearchKeywords')
     },
     methods: {
        handleGoBack(){
            this.$router.go(-1)
        },
        handleCancelHistory(){
            localStorage.removeItem('_search_history')
            this.storage_search = null
        }
     }
 }
 </script>

 <style lang="scss">
    @import '~@/assets/css/mixin'; 
    .yx-search{
        .yx-search-box,
        .yx-search-history{
            background: $white;
        }
        .yx-search-box{ 
            padding: 10px 15px;
            .yx-search-ipt{
                @include block(300px, 28px);
                position: relative;
                padding: 0 10px;
                background: #f4f4f4;
                line-height: 28px;
                input[type="text"]{
                    position: absolute;
                    left: 10px;
                    top: 0;
                    padding-left: 25px;
                    background: transparent;
                    width: 280px;
                    height: 100%; 
                    font-size: 14px;
                } 
                .iconfont{
                    color: #666;
                    font-size: 14px;
                } 
            }
            .yx-search-cancel{
                @include blackFont;
                margin-top: 6px; 
            }

        }
        .yx-search-history{
            padding: 0 10px;
            .yx-search-delete{
                color: #999; 
                font-size: 14px;
                .iconfont{
                    font-size: 18px;
                }
            }
        }
    }
 </style>
 
 
 