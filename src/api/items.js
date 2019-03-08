import axios from './middleware'

export default {
    fetchItemsData(params){  
        let uri = `/items?index=${params.index}`
		return axios.get(uri, params);
    }, 
} 