import axios from './middleware'

export default {
    fetchComments(params){  
        let uri = '/comments'
        let config = {
            params
        }
		return axios.get(uri, config);
    }, 
    fetchCommentTags(params){  
        let uri = `/tags?id=${params.id}`
		return axios.get(uri);
    }, 
} 