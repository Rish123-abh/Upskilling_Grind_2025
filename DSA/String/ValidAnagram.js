/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // Brute force O(n)  for space and time 
//     if(s.length!==t.length){
//         return false;
//     }
//     let mapS=new Map();
//     let mapT=new Map();
//     for(let i=0;i<s.length;i++){
//         mapS.set(s[i],(mapS.get(s[i])||0)+1);
//     }
//     for(let i=0;i<t.length;i++){
//         mapT.set(t[i],(mapT.get(t[i])||0)+1);
//     }
//     for(let i=0;i<t.length;i++){
//         if(mapS.get(t[i])!==mapT.get(t[i])){
//             return false;
//         }
//     }
// return true;


// Here using one map instead of two 
//     if(s.length!==t.length){
//         return false;
//     }
//     let mapS=new Map();
//     for(let i=0;i<s.length;i++){
//         mapS.set(s[i],(mapS.get(s[i])||0)+1);
//     }

//     for(let i=0;i<t.length;i++){
//         if(!mapS.has(t[i])|| mapS.get(t[i])===0 ){
//             return false;
//         }
//         mapS.set(t[i],mapS.get(t[i])-1);
//     }
// return true;
    
    // O(n) time and O(1) space but only works for lowercase 
if (s.length !== t.length) return false;

    let count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;  // increment for s
        count[t.charCodeAt(i) - 97]--;  // decrement for t
    }

    for (let num of count) {
        if (num !== 0) return false;
    }

    return true;
};