/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST=new Map();
    let mapTS=new Map();

    for(let i=0;i<s.length;i++){
        if(mapST.has(s[i]) && mapST.get(s[i])!==t[i]){
                return false;
        }
        if(mapTS.has(t[i]) && mapTS.get(t[i])!==s[i]){
                return false;
        }
            mapST.set(s[i],t[i]);
            mapTS.set(t[i],s[i]);
    }
    return true;

};