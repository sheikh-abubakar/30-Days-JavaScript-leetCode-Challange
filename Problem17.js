// Cache With Time Limit

class TimeLimitedCache{
    constructor(){
        this.cache = new Map()
    }

    set(key, value, duration)
    {
        const alreadyExist = this.cache.get(key)

        if(alreadyExist){
            clearTimeout(alreadyExist.timeOut)
        }
        const timeOut = setTimeout(()=>{
            this.cache.delete(key)
        }, duration)

        this.cache.set(key, {value, timeOut})

        return Boolean(alreadyExist)
    }

    get(key)
    {
        if(this.cache.has(key)){
            return this.cache.get(key).value
        }
        return -1;
    }

    count(){
       return this.cache.size
    }
};