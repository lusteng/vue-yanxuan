import axios from './middleware'

export default {
    fetchMarketDesc(params){  
        let uri = `/market_desc?id=${params.id}`
		return axios.get(uri, params);
    }, 
} 
