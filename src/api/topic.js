import axios from './middleware'

export default {
    fetchTopicData(params){  
        let uri = '/topic'
		return axios.get(uri);
    }, 
} 