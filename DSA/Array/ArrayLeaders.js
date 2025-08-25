// User function Template for javascript

/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
        // Brute force approach O(n2)
        // let ans=[];
        // for(let i=0;i<a.length;i++){
        // let max=a[i];
        //     for(let j=i+1;j<a.length;j++){
        //         max=Math.max(max,a[j]);
        //     }
        //     if(max===a[i]){
        //         ans.push(a[i]);
        //     }
        // }
        // return ans;
        
        
        // Optimised approach in O(n);
        
        let ans=[];
        let max=-Infinity;
        for(let i=a.length-1;i>=0;i--){
            if(a[i]>=max){
                ans.push(a[i]);
                max=Math.max(max,a[i]);
            }
        }
        return ans.reverse();
    }
}