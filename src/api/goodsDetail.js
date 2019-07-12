import axios from './middleware'

export default {
    fetchGoodsDetailInfo(params){  
        let uri = `/goodsDetail.json`
		return axios.get(uri);
    }, 
} 