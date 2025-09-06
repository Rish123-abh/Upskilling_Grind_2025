/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function rec(x,n,ans){
if(n===0){
    return ans;
}
if(n%2===1){
    ans=ans*x;
}
x*=x
    return rec(x,Math.floor(n/2),ans);
}
var myPow = function(x, n) {
 if(n===0)
{
    return 1;
}
 let ans=1;
 if(n<0){
    x=1/x;
    n=-n;
 } 
// while(n>0){
//     if(n%2==1){
//         ans*=x;
//     }
//     x*=x;
//     n=Math.floor(n/2);
// }

// return ans;
return rec(x,n,ans);  
};