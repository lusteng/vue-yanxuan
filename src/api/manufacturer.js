import axios from './middleware'

export default {
    fetchManufacturerData(params){  
        let uri = `/manufacturer.json`
		return axios.get(uri);
    }, 
} 