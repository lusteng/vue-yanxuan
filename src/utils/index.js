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
export function throttle(fn, interval = 300, immediate = false){
    let 
        timeout,
        st = 0 
        
    return function () {
        let _context = this,
            args = arguments  

        if(immediate){ //时间段开头执行
            let nt = + new Date(); 
            if(nt - st > interval){ 
                fn.apply(_context, args)
                st = nt
            }            
        }else{ //时间段末位执行
            if(!timeout){
                timeout = setTimeout(() => {
                    fn.apply(_context, args)
                    timeout = null
                }, interval)
            }

        }
    }
} 

//防抖 限制规定时间内才能继续执行事件，常用场景请求后端接口
export function  debounce(fn, wait = 1000, immediate = false){
    let timeout 
    
    return function(){ 
        let _context = this,
            arg = arguments

        timeout && clearTimeout(timeout)  //清楚上次执行

        if(immediate){ //立即执行 
            let canRun = !timeout
            //wait时间后timeout为空，fn可再次执行
            timeout = setTimeout(() => {  
                timeout = null
            }, wait)

            canRun && fn.apply(_context, arg)
        }else{ 
            timeout = setTimeout(() => {
                fn.apply(_context, arg)
            }, wait)
        }
    }
} 