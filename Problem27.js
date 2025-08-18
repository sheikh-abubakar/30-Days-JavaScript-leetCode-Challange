// Compacted object

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(obj === null){
        return obj
    }

    if(typeof obj !== "object"){
        return obj
    }

    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    }

    const myobject = {}

    for(const key in obj){
        let val = compactObject(obj[key])
        if(val){
            myobject[key] = val
        }
    }
    return myobject
};