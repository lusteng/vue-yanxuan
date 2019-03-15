import * as types from '../mutation-types'
import api from '@/api/items'

const state = {
    cateData: [], 
}

const getters = {
    cateData: state => state.cateData 
}

const actions = {
    fetchItemsData({commit}, condition){ 
        api.fetchItemsData(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_ITEMS_DATA, reply.data)
            }
        })
    },  
};



const mutations = {
    [types.FETCH_ITEMS_DATA](state, data){
        state.cateData = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

