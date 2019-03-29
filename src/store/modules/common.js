import * as types from '../mutation-types'
import api from '@/api/common'

const state = {
    rcmd_goods: [], 
}

const getters = {
    rcmd_goods: state => state.rcmd_goods 
}

const actions = {
    fetchRecommendGoods({commit}, condition){  
        api.fetchRecommendGoods(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_RECOMMEND_GOODS, reply.data)
            }
        })
    },  
};



const mutations = {
    [types.FETCH_RECOMMEND_GOODS](state, data){
        state.rcmd_goods = data.items
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

