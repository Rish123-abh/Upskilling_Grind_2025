/**
 * @param {number[]} arr
 * @returns {number[]}
 */
// approach  to find the maximum sum smallest and second smallest element in every subarray of size two.
// We can iterate through the array and for each pair of adjacent elements, we can calculate their
// We can think like this the smallest subarray that is of size 2 will always give maximum value 
// the more length of subarray there are min sum because smallest min and second min number will be find in that subarray
// so we can just iterate through the array and find the maximum sum of adjacent elements

// Examples:    10 1 2 3
// 10 1 -> 11
// 1 2 -> 3
// 2 3 -> 5 
// so the maximum sum will be 11 

// if taking  all subarrays
// 10 1 -> 11    10 1 2-> 11  10 1 2 3 -> 11
// 1 2 -> 3     1 2 3 -> 5   
// 2 3 -> 5
// so the maximum sum will be 11  that can be find in subarray of size 2 only


class Solution {
    maxSum(arr) {
        // code here
        let i=0,j=1;
        let ans=0;
        while(j<arr.length){
            ans=Math.max(ans,arr[i]+arr[j]);
            i++;j++;
        }
        return ans;
    }
}