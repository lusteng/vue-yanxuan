import Vue from "vue"
import Vuex from "vuex"
import Common from './modules/common'
import Home from './modules/home'
import Items from './modules/items'
import GoodsDetail from './modules/goodsDetail'
import Comment from './modules/comment'
import Search from './modules/search'
import CateList from './modules/cateList'
import MarketDesc from './modules/marketDesc'
import Topic from './modules/topic'
import Manufacturer from './modules/manufacturer'
import * as mutations from './mutation-types'


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Common,
        Home,
        Items,
        GoodsDetail,
        Comment,
        Search,
        CateList,
        MarketDesc,
        Topic,
        Manufacturer,
    },
    strict: debug
});
