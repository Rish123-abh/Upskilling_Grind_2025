/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n=nums.length;
    let ans=-Infinity;
    // Brute force approach TLE hit 
    // for(let i=0;i<n;i++){
    //     let j=i;
    //     let sum=0;
    //     for(j;j<n;j++){
    //         sum+=nums[j];
    //         ans=Math.max(ans,sum);
    //     }
    // }

// Optimised approach using kadanes algorithm

// basically we reset the sum to 0 if it becomes negative
// because if we add a negative sum to a future subarray, it will only decrease the value of that subarray
// so we start a new subarray from the next element
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=nums[i];
        ans=Math.max(sum,ans);
        if(sum<0){
            sum=0;
        }
        
    }
    return ans;
};