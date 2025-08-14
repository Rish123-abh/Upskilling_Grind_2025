// ProblemLink-> https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1


/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    sumOfDivisors(n) {
        let ans=0;
        // code here
        for(let i=1;i<=n;i++){
            for(let j=1;j<=i;j++){
                if(i%j==0){
                    ans+=j;
                }
            }
        }
        return ans;
    }
}