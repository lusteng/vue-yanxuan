import axios from './middleware'

export default {
    fetchRecommendGoods(params){  
        let uri = `/rcmd?id=${params.id}`
		return axios.get(uri);
    }, 
} 