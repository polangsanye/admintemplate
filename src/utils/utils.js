//函数防抖
export function debounce(fn,delay=1000){
    let time=null;
    return function(){
        time&&clearTimeout(time);
        time = setTimeout(()=>{
            fn.call(fn,arguments)
        },delay)
    }
}

//函数节流
export function throttle(fn,delay=1000){
 var previous=null;
 return function(){
     let nowTime = new Date().getTime();
     if(nowTime-previous>delay){
         fn.call(this,arguments);
         previous=nowTime
     }
 }
}

//判断是否是引用数据类型 isObject({},'Object') type的值首字母需要大写
export function isObject(value,type){
    return Object.prototype.toString.call(value)===`[object ${type}]`
}
