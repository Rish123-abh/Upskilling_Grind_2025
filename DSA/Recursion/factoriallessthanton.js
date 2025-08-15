
// User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
 */

function recur(n){
    if(n==1){
        return 1;
    }
    return n*recur(n-1);
}

class Solution {
    // Function to calculate the factorial of a number.
    
    factorialNumbers(n) {
        let arr=[];
        for(let i=1;i<=n;i++){
            let ans=recur(i);
            if(ans<=n){
                arr.push(ans);
            }
            else{
                break;
            }
        }
        return arr;
        // your code here
        
    }
}