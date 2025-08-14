// Problem Link-> https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1

// approach -> Simple find cube and add each 

// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    armstrongNumber(n) {
        // code here
        let initial=n;
            let ans=0;
        while(n!=0){
            let digit=n%10;
            n=Math.floor(n/10);
            ans+=digit**3;
        }
        if(ans==initial)
            return true;
        return false;
    }
}
