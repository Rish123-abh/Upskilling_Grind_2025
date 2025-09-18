/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left=0,right=0;
    let sum=0;
    let ans=Infinity;
    while(right<nums.length){
        sum+=nums[right];
        while(sum>=target){
            ans=Math.min(ans,right-left+1);
            sum-=nums[left];
            left++;
        }
         right++;

    }
    if(ans===Infinity){
        return 0;
    }
    return ans;
};