import axios from './middleware'

export default {
    fetchCateList(params){  
        let uri = `/cateList.json`
		return axios.get(uri);
    }, 
} 


