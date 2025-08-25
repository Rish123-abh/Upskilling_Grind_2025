/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Brute Force approach
    // let ans=0;
//   for(let i=0;i<prices.length;i++){
//     for(let j=i+1;j<prices.length;j++){
//         ans=Math.max(ans,prices[j]-prices[i]);
//     }
//   }
//   return ans;

// Trying something optimised 

// let maxIndex=0,minIndex=0;
// let maxValue=prices[0],minValue=prices[0];
// let ans=0;
// for(let i=1;i<prices.length;i++){
//     if(prices[i]<minValue){
//         minValue=prices[i];
//         minIndex=i;
//     }
//     else if (maxIndex<minIndex){
//         maxIndex=i;
//         maxValue=prices[maxIndex];
//     }
//     else if(prices[i]>maxValue){
//         maxValue=prices[i];
//         maxIndex=i;
//     }
//     if((maxIndex-minIndex)>0)
//     ans=Math.max(ans,maxValue-minValue);
// }

// return ans;

// best Optimised solution 
// need to track of minValue and max Profit at each index
let minPrice=Infinity;
let maxProfit=0;
for(let i=0;i<prices.length;i++){
    if(prices[i]<minPrice){
        minPrice=prices[i];
    }
    else{
        maxProfit=Math.max(maxProfit,prices[i]-minPrice);
    }
}
return maxProfit;
};