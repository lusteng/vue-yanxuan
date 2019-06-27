 
import * as types from '../mutation-types'
import api from '@/api/manufacturer' 

const state = {  
    mrData: {},
}

const getters = {
    mrData: state => state.mrData, 
}

const actions = { 
    fetchManufacturerData({commit}, condition){  
        api.fetchManufacturerData().then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_MANU_FACTURER_DATA, reply.data)
                condition.cb && condition.cb()
            }
        })
    },  
};



const mutations = { 
    [types.FETCH_MANU_FACTURER_DATA](state, data){
        state.mrData = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

