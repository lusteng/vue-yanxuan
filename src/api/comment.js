import axios from './middleware'

export default {
    fetchComments(params){  
        let uri = `/comment_${params.page}.json`
        let config = {
            params
        }
		return axios.get(uri, config);
    }, 
    fetchCommentTags(params){  
        let uri = `/comment_tag.json?id=${params.id}`
		return axios.get(uri);
    }, 
} 