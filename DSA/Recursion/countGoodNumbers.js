/**
 * @param {number} n
 * @return {number}
 */

// Here in js below 10**9+7 does not work with precision for large n
    //   let maxValue=10**9+7;
    // So here we use BigInt
    // BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
    // BigInt can be created by appending 'n' to the end of an integer or by calling the BigInt() constructor.
      let maxValue=1000000007n;
 function power(n,x){
    let ans=1n;
    n=BigInt(n);
    x=BigInt(x);
    while(x>0n){
        if(x%2n!==0n){
            ans=(ans*n)%maxValue;
        }
        n=(n*n)%maxValue;
        x=x/2n;
    }
    return ans;
 }
var countGoodNumbers = function(n) {
    n=BigInt(n);
  let fivePower=(n+1n)/2n;
  let fourPower=n/2n;

  let ans = ((power(5,fivePower)%maxValue)*(power(4,fourPower)%maxValue))%maxValue;

  return Number(ans);
  
};