/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map=new Map();

    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }
    str="aeiou";
    let maxVowel=0,maxConst=0;
    for(const [char,cnt] of map){
        if(str.includes(char)){
            maxVowel=Math.max(maxVowel,cnt);
        }
        else{
            maxConst=Math.max(maxConst,cnt);
        }
    }
    return maxVowel+maxConst;
};