/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {


    // My Solution 

//     let ans="";
//     let index=-1;
//     for(let i=num.length-1;i>=0;i--){
//         if(num[i]%2==1){
//             index=i;
//             break;
//         }  
//     }
//     for(let j=0;j<=index && index!=-1;j++){
//         ans+=num[j];
//     }
// return ans;


// Optimised Solution 

for(let i=num.length-1;i>=0;i--){
    if(parseInt(num[i])%2===1){
        return num.substring(0,i+1);
    }
}
return "";
};