import axios from './middleware'

export default {
    fetchBannerData(params){ 
        let uri = `/banner?index=${params.index}`
		return axios.get(uri, params);
    },
    fetchShoppingChannel(params){ 
        let uri = `/channels`
		return axios.get(uri, params);
    },
    fetchHotSallProduct(params){ 
        let uri = `/hotSalls`
		return axios.get(uri, params);
    },
    fetchPopularRecommends(params){ 
        let uri = `/populars`
		return axios.get(uri, params);
    },
    fetchFastArrivals(params){ 
        let uri = `/arrival`
		return axios.get(uri, params);
    },
    fetchCategoryGoods(params){ 
        let uri = `/categoryGoods`
		return axios.get(uri, params);
    },
} 