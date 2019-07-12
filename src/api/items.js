import axios from './middleware'

export default {
    fetchItemsData(params){  
        let uri = `/itemLists_${params.index}.json?index=${params.index}`
		return axios.get(uri, params);
    }, 
} 