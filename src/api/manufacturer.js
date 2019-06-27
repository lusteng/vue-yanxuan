import axios from './middleware'

export default {
    fetchManufacturerData(params){  
        let uri = `/manufacturer`
		return axios.get(uri);
    }, 
} 