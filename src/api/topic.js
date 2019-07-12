import axios from './middleware'

export default {
    fetchTopicData(params){  
        let uri = '/topic.json'
		return axios.get(uri);
    }, 
} 