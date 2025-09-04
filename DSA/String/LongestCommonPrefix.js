/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Brute Force Approach
    
    // let word="";
    // let first=strs[0];
    // for(let i=0;i<first.length;i++){
    // let flag=true;
    // for(let j=0;j<strs.length;j++){
    //     if(first[i]!=strs[j][i]){
    //         flag=false;
    //         break;
    //     }
    // }
    // if(flag){
    //     word+=first[i];
    // }
    // else{
    //     break;
    // }  
    // }
    // return word;


    // Other approach using startswith

    let prefix=strs[0];

    for(let i=1;i<strs.length;i++){
        while(!strs[i].startsWith(prefix)){
            prefix=prefix.slice(0,prefix.length-1);
            if(prefix==="")return"";
        }
    }
    return prefix;
};