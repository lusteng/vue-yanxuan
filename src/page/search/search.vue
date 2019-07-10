 <template>
     <div class="yx-search">
        <div class="yx-search-box clearfix">
            <div class="yx-search-ipt">
                <i class="iconfont icon-sousuo-copy"></i>
                <input type="text" @keyup="handleSearch" :placeholder="`${search_kd.defaultKeyword && search_kd.defaultKeyword.keyword}`"/>
            </div> 
            <span class="fr yx-search-cancel" @click="handleGoBack">取消</span>
        </div>
        <div v-show="relateSearchList.length === 0"> 
            <div 
                v-if="storage_search" 
                class="yx-search-block yx-search-history"
            >    
                <div class="yx-search-delete yx-search-til clearfix">
                    <span class="fl">历史记录</span>
                    <i class="iconfont icon-shanchu fr" @click="handleCancelHistory"></i>
                </div>
                <div> 
                    <router-link
                        class="tag"
                        v-for="(tag, index) in storage_search"
                        :key="index"
                        :to="{
                            path: '/searchgoods',
                            query: {keyword: tag}
                        }"
                    > 
                        <ProductTag
                            type="disabled"
                            size="lg" 
                            class="tg"
                        >{{tag}}</ProductTag>
                    </router-link>
                </div>
            </div>
            <div 
                v-if="storage_search" 
                class="yx-search-hot yx-search-block"
            >    
                <div class="yx-search-til clearfix">
                    <span class="fl">热门搜索</span>
                </div>
                <div> 
                    <router-link
                        class="tag"
                        v-for="(tag, index) in search_hot"
                        :key="index"
                        :to="{
                            path: '/searchgoods',
                            query: {keyword: tag}
                        }"
                    > 
                        <ProductTag
                            :type="index % 4 === 0 ? 'disabled' : 'default'"
                            size="lg" 
                            class="tg"
                        >{{tag}}</ProductTag>
                    </router-link>
                </div>
            </div>
        </div>
        <div else class="yx-search-list">
            <div
                class="inner" 
                v-for="(item, index) in relateSearchList" 
                :key="index"
                @click="handleSkiptoSearch(item)" 
            >{{item}}</div>
        </div>
     </div>
 </template>

 <script>
import { mapGetters } from 'vuex'
import ProductTag from '@/components/common/ProductTag'
import { throttle } from '@/utils'
export default {
     name: "search",
     components: {
         ProductTag,
     },
     data(){
        return {
            storage_search: JSON.parse(localStorage.getItem('_search_history')),
            relateSearchList: [],  //TODO 生成关联搜索词
        }
     },
     computed: {
         ...mapGetters(['search_kd', 'search_hot'])
     },
     created(){
        this.$store.dispatch('fetchSearchKeywords')
     },
     methods: {
        handleSkiptoSearch(kw){
            let search_history = JSON.parse(localStorage.getItem('_search_history')) || []
            if(!search_history.some(item => {
                return item === kw 
            })){
                search_history.push(kw);
                this.storage_search = search_history
                localStorage.setItem('_search_history', JSON.stringify(search_history))  
            }
            this.$router.push({
                path: '/searchgoods',
                query: {keyword: kw}
            })
        },
        handleSearch(e){
            const _this = this,
               keywords = e.target.value;
            if(keywords){ 
                const search = () => {
                    let 
                        arrLen = 8,
                        randomArr = new Array(Math.ceil(Math.random() * arrLen)).fill(`\\u${(Math.round(Math.random() * 20901) + 19968).toString(16)}`);

                    _this.relateSearchList = randomArr.map(item => {     
                        return `${keywords}${item}`
                    })  
                }
                throttle(search, 100)()  
            }else{
                _this.relateSearchList = []
            }
        },
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
    .yx-search{ 
        .yx-search-box,
        .yx-search-history,
        .yx-search-list,
        .yx-search-hot{
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
        .yx-search-block{
            padding: 10px;
            margin-bottom: 10px;
            .yx-search-til{
                color: #999; 
                font-size: 14px;
                margin: 10px 0;
                .iconfont{
                    font-size: 18px;
                }
            }
            .tag{
                display: inline-block;
                margin: 0 10px 10px 0;
            }
        }
        .yx-search-hot{ 
            .yx-search-hot-til{ 
                margin: 0 0 10px;
            } 
        }
        .yx-search-list{
            padding-left: 15px;
            .inner{
                display: block;
                line-height: 20px; 
                padding: 10px 0;
                border-bottom: 1px solid $gray; 
            }
        }
    }
 </style>
 
 
 