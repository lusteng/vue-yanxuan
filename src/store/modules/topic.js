import * as types from '../mutation-types'
import api from '@/api/topic' 

const state = {
    topicList: [],  
}

const getters = {
    topicList: state => state.topicList,  
}

const actions = {
    fetchTopicData({commit}){  
        api.fetchTopicData().then(reply => { 
            if(reply.errCode == 0){
                commit(types.FETCH_TOPIC_DATA, reply.data) 
            } 
        }) 
    },   
};



const mutations = { 
    [types.FETCH_TOPIC_DATA](state, data){
        state.topicList = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

