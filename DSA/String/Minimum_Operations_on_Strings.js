/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let minchar=Infinity;
    for (let i=0;i<s.length;i++){
        if(s[i]!='a'){
        minchar=Math.min(minchar,s.charCodeAt(i)-97);   
        }
    }
    if(minchar===Infinity){
        return 0;
    }
    return 25-minchar+1;
};