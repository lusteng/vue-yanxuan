import axios from './middleware'

export default {
    fetchBannerData(params){ 
        let uri = `/banner_${params.index}.json?index=${params.index}`
		return axios.get(uri, params);
    },
    fetchShoppingChannel(params){ 
        let uri = `/indexPage_channels.json`
		return axios.get(uri, params);
    },
    fetchHotSallProduct(params){ 
        let uri = `/indexPage_hotSellProduct.json`
		return axios.get(uri, params);
    },
    fetchPopularRecommends(params){ 
        let uri = `/indexPage_popularRecommend.json`
		return axios.get(uri, params);
    },
    fetchFastArrivals(params){ 
        let uri = `/indexPage_arrivals.json`
		return axios.get(uri, params);
    },
    fetchCategoryGoods(params){ 
        let uri = `/indexPage_categoryGoods.json`
		return axios.get(uri, params);
    },
} 