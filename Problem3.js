//To Be Or Not To Be


/*
* @param {string} val
* return {object}
*/

var expect = function(val) {
    obj ={
        toBe(val1){
            if(val === val1) return true
            else throw new Error("Not Equal")
        },
        notToBe(val1){
            if(val !== val1) return true
            else throw new Error("Equal")
        }
    }
    return obj
};
