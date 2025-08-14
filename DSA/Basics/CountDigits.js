//Problem Link- https://www.geeksforgeeks.org/problems/count-digits5716/1

// Approach -> Find last digit and check whther it divides number or not 


// Concept Learned -> Math.floor() This is used for integer value while dividing unlike in c++ can directly used / 

// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to check whether the number evenly divides n.
    evenlyDivides(n) {
        // code here
        let initial=n;
        let count=0;
        while(n!=0){
            let digit=n%10;
            n=Math.floor(n/10);
            if(digit==0){
                continue;
            }
            if((initial%digit)===0){
                count++;
            }
        }
    return count;
        }
    
}