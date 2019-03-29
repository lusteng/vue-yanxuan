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

//节流 执行频率 300ms 
export function throttle(fn, interval = 300){
    let run = true
    return () => {
        if(!run) return
        run = false
        setTimeout(() => {
            fn.apply(this, arguments)
            run = true 
        }, interval) 
    } 
}

//防抖 300ms内才能继续执行
export function debounce(fn, interval = 300){
    let timeout = null
    return () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, interval)
    }
}