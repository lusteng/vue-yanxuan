import axios from './middleware'

export default {
    fetchBannerData(params){ 
        let uri = `/banner?index=${params.index}`
		return axios.get(uri, params);
    }
} 