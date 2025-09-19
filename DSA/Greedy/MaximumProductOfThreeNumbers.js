/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let n=nums.length;
    // if all positive then last 3 elements product will be answer 
    let last3=nums[n-1]*nums[n-2]*nums[n-3];
    // if negative includes then 2 -ve from left and positiv efrom right
    let first3=nums[0]*nums[1]*nums[n-1];

    return Math.max(last3,first3);
};