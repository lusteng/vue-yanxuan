//Verifies one item exists in a array
export function oneOf(val, args){
    return args.some(arg => {
        return arg === val
    })
}

//打乱数组(洗牌)
export function shuffle(arr){ 
    let 
        len = arr.length,
        random_ind,
        exchangeItem;
    while(len){
        random_ind = Math.floor(Math.random() * len --)
        exchangeItem = arr[len]
        arr[len] = arr[random_ind]
        arr[random_ind] = exchangeItem 
    } 
    return arr
} 

//节流 降低事件执行频率 提高高频触发场景性能 
export function throttle(fn, threshhold = 300){ 
    let 
        starTime = new Date() - 0,
        timeout,
        run = true 
        
    return function(){ 
        let 
            _this = this,
            arg = arguments,
            nowTime = new Date() - 0 
        clearTimeout(timeout)        
        // TODO  arg 参数获取  
        if(nowTime - starTime >= threshhold){
            // 超过阈值，执行
            fn.apply(_this, arg)
            starTime = nowTime
        }else{
            // 最后一次执行
            timeout = setTimeout(() => {
                fn.apply(_this, arg)
            }, threshhold)
        } 
    } 
}

//防抖 限制规定时间内才能继续执行事件，常用场景请求后端接口
export function debounce(fn, threshhold = 300){
    let timeout = null
    return () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, threshhold)
    }
}