import Vue from 'vue'
import axios from 'axios' 
// import JSCookie from 'js-cookie'
import { logout } from './user' 
import { Toast } from 'vant'

const BaseMessage = "服务器开小差了，请重试！";
//设置baseURI
// axios.defaults.baseURL = './../mock/'; 

//axios request 拦截器
// axios.interceptors.request.use(
//     config => { 
//         const Authorization = JSCookie.get('YF_AUTHORIZATION');  
//         if(Authorization){  //if has login, set Authorization in headers 
//             config.headers['Authorization'] = Authorization;
//         }
//         return config
//     },
//     error => {
//       console.log(`error: ${error}`) // for debug
//       Promise.reject(error)
//     }
// )

//axios response  
axios.interceptors.response.use(  
    response => { 
        const data = response.data;
        //       headers = response.headers,
        //       authorization = headers ? headers.authorization : undefined,
            //   authorization_cookie = JSCookie.get("YF_AUTHORIZATION");  
        //update token when backend return different this cookie token
        // if(authorization && authorization !== authorization_cookie){ 
        //     //有效期一天
        //     JSCookie.set("YF_AUTHORIZATION", authorization, {
        //         expires: 1 
        //     }); 
        //     data.data && data.data.email && JSCookie.set("YF_USERNAME", data.data.email, {
        //         expires: 1
        //     }); 
        // }        
        if(data && data.errCode == '100005'){ //login overdue  
            logout();
            Toast.fail('请重新登录！');
        }else if(data && data.errCode != 0){ //other error 
            Toast.fail(data.error_msg || BaseMessage);
        } 

        return Object.assign({}, data, {
            status:  (data && data.errCode == 0) ? true : false // Redefiny status
        });
    },
    // Do something with response error
    error => {    
        console.log(`error: ${error}`) // for debug
        let message = BaseMessage;
        if(error && error.response){
            switch(error.response.status){
                case 400:
                message = '错误请求'
                break;
                case 401:
                logout();
                message = '登录超时，请重新登录'
                break;
                case 403:
                message = '拒绝访问'
                break;
                case 404:
                message = '请求错误,未找到该资源'
                break;
                case 405:
                message = '请求方法未允许'
                break;
                case 408:
                message = '请求超时'
                break;
                case 500:
                message = '服务器端出错'
                break;
                case 501:
                message = '网络未实现'
                break;
                case 502:
                message = '网络错误'
                break;
                case 503:
                message = '服务不可用'
                break;
                case 504:
                message = '网络超时'
                break;
                case 505:
                message = 'http版本不支持该请求'
                break;
                default:
                error.response.data && error.response.data.error_msg && (message = error.response.data.error_msg)
            }
        }
        Toast.fail(message);
        return Promise.reject(error);
    }
);  
 

export default axios
