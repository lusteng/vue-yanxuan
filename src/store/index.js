import Vue from "vue"
import Vuex from "vuex"
import Common from './modules/common'
import Index from './modules/index'
import Items from './modules/items'
import GoodsDetail from './modules/goodsDetail'
import Comment from './modules/comment'
import Search from './modules/search'
import CateList from './modules/cateList'
import MarketDesc from './modules/marketDesc'
import * as mutations from './mutation-types'


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Common,
        Index,
        Items,
        GoodsDetail,
        Comment,
        Search,
        CateList,
        MarketDesc,
    },
    strict: debug
});
