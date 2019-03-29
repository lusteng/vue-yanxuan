import axios from './middleware'

export default {
    fetchSearchKeywords(params){  
        let uri = '/search_kds'
		return axios.get(uri);
    }, 
} 