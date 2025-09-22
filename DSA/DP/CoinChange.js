/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 // Recursion+Memoization 
//  function findNumberofCoins(coins,amount,sum,memo){
//     // base case 
//     if(sum>amount){
//         return -1;
//     }
//     if(sum===amount){
//         return 0;
//     }

//     let rem = amount - sum;
//     if (memo.has(rem)) {
//         return memo.get(rem);
//     }

// let ans=Infinity;
//     // Processing
//     for(let i=0;i<coins.length;i++){
//         let temp = findNumberofCoins(coins, amount,  sum + coins[i],memo);
//         if (temp !== -1) {
//             ans = Math.min(ans, temp+1);
//         }
//     }

//     memo.set(rem, ans === Infinity ? -1 : ans);
//     return memo.get(rem);
//  }
var coinChange = function(coins, amount) {
    // if(amount===0){
    //     return 0;
    // }
    // let memo=new Map();
    // let result= findNumberofCoins(coins,amount,0,memo);
    // return result;

    // Tabulation Appraoch 
    let dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i<=amount;i++){
        for(let coin of coins){
            if(i-coin>=0){
                dp[i]=Math.min(dp[i],dp[i-coin]+1);
            }
        }
    }
    return dp[amount]===Infinity?-1:dp[amount];
};