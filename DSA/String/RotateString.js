/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // Brute Force Solution O(n^2);
//    if(s===goal){
//     return true;
//    }
//    for(let i=0;i<s.length;i++){
//     let str="";
//     for(let j=0;j<s.length;j++){
//         str+=s[(j+1)%s.length];   
//     }
//     s=str;
//     console.log(`s at ${i}`,str);
//     if(str===goal){
//         return true;
//     }
//    }
//    return false; 


// O(n);
if(s.length!==goal.length){
    return false;
}
if(!(s+s).includes(goal)){
    return false;
}
return true;
};