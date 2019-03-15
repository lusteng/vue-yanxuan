import * as types from '../mutation-types'
import api from '@/api/goodsDetail'

const state = {
    detailInfo: {}, 
}

const getters = {
    detailInfo: state => state.detailInfo 
}

const actions = {
    fetchGoodsDetailInfo({commit}, condition){ 
        api.fetchGoodsDetailInfo().then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_GOODS_DETAIL_INFO, reply.data)
            }
        })
    },  
};



const mutations = {
    [types.FETCH_GOODS_DETAIL_INFO](state, data){
        state.detailInfo = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

