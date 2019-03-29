import * as types from '../mutation-types'
import api from '@/api/search' 

const state = {
    search_kd: [], 
}

const getters = {
    search_kd: state => state.search_kd, 
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

