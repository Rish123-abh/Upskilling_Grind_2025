// Approach to solve the problem of finding the longest subarray with a sum equal to k in an array.
// We can use the prefix sum technique along with a hash map to store the first occurrence of each prefix sum.
// This allows us to efficiently check if there exists a subarray that sums to k by checking if (current prefix sum - k) has been seen before. 
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestSubarray(arr, k) {
        // code here
        
        
        // This is my brute force approach O(n^2) it is not optimised 
        
        // let sum=0;
        // let ans=0;
        // for(let i=0;i<arr.length;i++){
        //     sum=arr[i];
        //     if(sum===k){
        //       ans=Math.max(ans,1);
        //     }
        //     for(let j=i+1;j<arr.length;j++){
        //         sum+=arr[j]
        //         if(sum===k){
        //             ans=Math.max(ans,j-i+1);
        //         }
        //     }
        // }
        
        // return ans;
        
        // This is optimised approach  O(n) for space and time 
        
        let prefixSum=0;
        let maxLength=0;
        let map =new Map();
        for(let i=0;i<arr.length;i++){
            prefixSum+=arr[i];
            if(prefixSum===k){
                maxLength=i+1;
            }
            if(!map.has(prefixSum)){
                map.set(prefixSum,i);
            }
            if(map.has(prefixSum-k)){
                maxLength=Math.max(maxLength,i-map.get(prefixSum-k));
            }
        }
        
        return maxLength;
        
    }
}
