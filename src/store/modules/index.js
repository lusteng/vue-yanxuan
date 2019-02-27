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
    ]
}

const getters = {
    bannerDatas: state => state.bannerDatas
}

const actions = {
    fetchBannerData({commit}, condition){ 
        api.fetchBannerData(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_BANNER_DATA, reply.data)
            }
        })
    }
};



const mutations = {
    [types.FETCH_BANNER_DATA](state, data){
        state.bannerDatas = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

