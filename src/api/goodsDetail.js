import axios from './middleware'

export default {
    fetchGoodsDetailInfo(){  
        let uri = '/detail'
		return axios.get(uri);
    }, 
} 