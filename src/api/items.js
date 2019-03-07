import axios from './middleware'

export default {
    fetchItemsData(params){  
        let uri = '/items'
		return axios.get(uri, params);
    }, 
} 