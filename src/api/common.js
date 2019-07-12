import axios from './middleware'

export default {
    fetchRecommendGoods(params){  
        let uri = `/rcmd.json?id=${params.id}`
		return axios.get(uri);
    }, 
} 