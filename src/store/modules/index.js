import Vue from 'vue'
import * as types from '../mutation-types'
import api from '@/api/index'

const state = {
    bannerDatas: [],
    topNavOptions: [
        {
            name: "推荐",
            link: ""
        },
        {
            name: "居家生活",
            link: ""
        },
        {
            name: "服饰鞋包",
            link: ""
        },
        {
            name: "美食酒水",
            link: ""
        },
        {
            name: "个护清洁",
            link: ""
        },
        {
            name: "母婴亲子",
            link: ""
        },
        {
            name: "运动旅行",
            link: ""
        },
        {
            name: "数码家电",
            link: ""
        },
        {
            name: "礼品特色",
            link: ""
        }
    ],
    channelDatas: [],
    hotSalls: {},
    populars: {},
    arrivals:[],
    cateGoods: []
}

const getters = {
    bannerDatas: state => state.bannerDatas
   ,channelDatas: state => state.channelDatas
   ,hotSalls: state => state.hotSalls
   ,populars: state => state.populars
   ,arrivals: state => state.arrivals
   ,cateGoods: state => state.cateGoods
}

const actions = {
    fetchBannerData({commit}, condition){ 
        api.fetchBannerData(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_BANNER_DATA, reply.data)
            }
        })
    },
    fetchShoppingChannel({commit}, condition){ 
        api.fetchShoppingChannel(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_SHOPPING_CHANNEL, reply.data)
            }
        })
    },
    fetchHotSallProduct({commit}, condition){ 
        api.fetchHotSallProduct(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_HOT_SALL_PRODUCT, reply.data)
            }
        })
    },
    fetchPopularRecommends({commit}, condition){ 
        api.fetchPopularRecommends(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_POPULAR_RECOMMENDS, reply.data)
            }
        })
    },
    fetchFastArrivals({commit}, condition){ 
        api.fetchFastArrivals(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_FAST_ARRIVALS, reply.data)
            }
        })
    },
    fetchCategoryGoods({commit}, condition){ 
        api.fetchCategoryGoods(condition).then(reply => {
            if(reply.errCode == 0){ 
                commit(types.FETCH_CATEGORY_GOODS, reply.data)
            }
        })
    }, 
    
};



const mutations = {
    [types.FETCH_BANNER_DATA](state, data){
        state.bannerDatas = data
    },
    [types.FETCH_SHOPPING_CHANNEL](state, data){
        state.channelDatas = data
    },
    [types.FETCH_HOT_SALL_PRODUCT](state, data){
        state.hotSalls = data
    },
    [types.FETCH_POPULAR_RECOMMENDS](state, data){
        state.populars = data 
    },
    [types.FETCH_FAST_ARRIVALS](state, data){
        state.arrivals = data 
    },
    [types.FETCH_CATEGORY_GOODS](state, data){
        state.cateGoods = data 
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

