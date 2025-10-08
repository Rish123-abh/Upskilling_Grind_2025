/**
 * @param {string} s
 * @return {number}
 */
// function recurseSolution(s,index,map,dp){
//     if(index>s.length){
//         return 0;
//     }
//     if(s[index]!=="0" && (index===s.length-1|| index===s.length)){
//         dp[index]=1;
//         return 1;
//     }
//     if(dp[index]!==-1){
//         return dp[index];
//     }
//     let ans=0;
//     // single digit
//     if(map.has(s[index])){
//         ans+=recurseSolution(s,index+1,map,dp);
//     }
//     //  double digit
//     if(map.has(s.substr(index,2))){
//         ans+=recurseSolution(s,index+2,map,dp);
//     }
//     dp[index]=ans;
//     return ans;
// }
var numDecodings = function(s) {
    let n=s.length;
    let dp=[];
    dp[n-1]=1;
    let map=new Map();
    for(let i=1;i<=26;i++){
        map.set(i.toString(),String.fromCharCode(65+i-1));
    }
    for(let i=n-2;i>=0;i--){
        // single digit
        if(s[i]==="0" || !map.has(s[i])){
            dp[i]=0;
        }
        else{
            dp[i]=1;
        }
        // double digit
        dp[i]+=dp[i+1];
    }
    return dp[0];
};