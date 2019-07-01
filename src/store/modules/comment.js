import * as types from '../mutation-types'
import api from '@/api/comment'
import { shuffle } from '@/utils'

const state = {
    product_cmts: [], 
    product_cmt_tags: [], 
}

const getters = {
    product_cmts: state => state.product_cmts, 
    product_cmt_tags: state => state.product_cmt_tags, 
}

const actions = {
    fetchComments({commit}, condition){  
        api.fetchComments(condition.params).then(reply => { 
            if(reply.errCode == 0){
                commit(types.FETCH_COMMENTS, {
                    data: reply.data, 
                    reset: condition.reset
                }) 
                condition.cb && condition.cb()
            }else{
                condition.errCb && condition.errCb() 
            }
        }).catch(() => {
            condition.errCb && condition.errCb() 
        })
    },  
    fetchCommentTags({commit}, condition){  
        api.fetchCommentTags(condition).then(reply => {
            if(reply.errCode == 0){
                commit(types.FETCH_COMMENT_TAGS, reply.data)
            }
        })
    },  
};



const mutations = {
    [types.FETCH_COMMENTS](state, data){ 
        if(data.reset){
            //随机取几项数据充当标签筛选数据  Will Delete 
            let 
                result = data.data.result,
                max = 10,
                new_result = shuffle(result),
                radom_result = new_result.slice(0, Math.floor(Math.random() * max));  
            state.product_cmts = radom_result
            // state.product_cmts = data.data.result; //Will Use
        }else{
            let product_cmts = state.product_cmts
            state.product_cmts = product_cmts.concat(data.data.result)
        }
    },
    [types.FETCH_COMMENT_TAGS](state, data){
        state.product_cmt_tags = data
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}

