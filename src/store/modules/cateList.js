import * as types from '../mutation-types'
import api from '@/api/cateList' 

const state = { 
    cateLists: {
        nav: [],
        rightCnt: {}
    }
}

const getters = {
    cateLists: state => state.cateLists, 
}

const actions = { 
    fetchCateList({commit}, condition){  
        api.fetchCateList().then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_CATE_LIST, reply.data)
                condition.cb && condition.cb()
            }
        })
    },  
};



const mutations = { 
    [types.FETCH_CATE_LIST](state, data){
        state.cateLists = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

