import * as types from '../mutation-types'
import api from '@/api/marketDesc'

const state = {
    marketDescHtml: "", 
}

const getters = {
    marketDescHtml: state => state.marketDescHtml 
}

const actions = {
    fetchMarketDesc({commit}, condition){ 
        api.fetchMarketDesc(condition).then(reply => { 
            if(reply.errCode == 0){ 
                commit(types.FETCH_MARKET_DESC, reply.data)
            }
        })
    },  
};



const mutations = {
    [types.FETCH_MARKET_DESC](state, data){
        state.marketDescHtml = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

