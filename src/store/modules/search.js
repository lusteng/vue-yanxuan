import * as types from '../mutation-types'
import api from '@/api/search' 

const state = {
    search_kd: [], 
    search_hot: [
        '拉杆箱 7.8折起', '薄款家居服7折起', '春夏床品8折起', '酒水饮料 低至54折', '陶瓷煲 底价买赠', '挂烫机直降230', '即食燕窝8折', '明前龙井 限时特惠', '新品女包 39元起'
    ]
}

const getters = {
    search_kd: state => state.search_kd, 
    search_hot: state => state.search_hot, 
}

const actions = {
    fetchSearchKeywords({commit}){  
        api.fetchSearchKeywords().then(reply => { 
            if(reply.errCode == 0){
                commit(types.FETCH_SEARCH_KEYWORDS, reply.data) 
            } 
        }) 
    },   
};



const mutations = { 
    [types.FETCH_SEARCH_KEYWORDS](state, data){
        state.search_kd = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

