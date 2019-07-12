import axios from './middleware'

export default {
    fetchSearchKeywords(params){  
        let uri = '/search_kds.json'
		return axios.get(uri);
    }, 
} 