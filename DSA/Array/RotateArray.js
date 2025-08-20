/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

// This is my brute force approach on my own 
    // if(k===0){
    //     return nums;
    // }
    // if(k>nums.length){
    //     k=k%nums.length;
    // }
    // let ans=[];
    // for(let i=0;i<nums.length;i++){
    //     ans[i]=nums[(i+nums.length-k)%nums.length];
    // }
    // for(let i=0;i<ans.length;i++){
    //  nums[i]=ans[i];
    // }
    // return nums;


// This is approach of in place array 
// Just Remember when need to rotate array by k elements, we can reverse the whole array and then reverse the first k elements and then reverse the rest of the elements.
// This is a common technique used in array rotation problems.

    // This is Optimised approach
    let n=nums.length;
    k=k%n;
    function reverse(nums,i,j){
        while(i<=j){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            i++;
            j--;
        }
    }

    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);


};