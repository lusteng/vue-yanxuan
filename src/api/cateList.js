import axios from './middleware'

export default {
    fetchCateList(params){  
        let uri = `/cate_list`
		return axios.get(uri);
    }, 
} 