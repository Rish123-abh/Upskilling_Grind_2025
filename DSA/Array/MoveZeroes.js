// Approach: Two-Pointer Technique
// Since it is mentioned in this problem for inplace then we can think of two pointers 
// This technique is useful for problems involving sorted arrays or when you need to filter elements in-place.
// The idea is to use one pointer to write unique elements and another pointer to scan through the array.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var moveZeroes = function(nums) {


    // Brute Force Approach using extra space
    // let ans=[];
    // let cnt=0;
    // for(let num of nums){
    //     if(num===0){cnt++}
    // }
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]!==0){
    //         ans.push(nums[i]);
    //     }
    // }
    // for(let i=0;i<cnt;i++){
    //     ans.push(0);
    // }
    // for(let i=0;i<ans.length;i++){
    //     nums[i]=ans[i];
    // }


    // Optimised Approach with O(1) space and n2 time this my own thinking 

    // let i=0;
    // let j=nums.length-1;

    // while(i<=j){
    //     if(nums[i]==0){
    //         for(let k=i;k<j;k++){
    //             nums[k]=nums[k+1];
    //         }
    //         nums[j]=0;
    //         j--;
    //     }
    //     else{
    //         i++;
    //     }
    // }


// This is fully Optimised Approach with O(n) and O(1)
    let i=0;
    let j=i+1;
    while(j<nums.length){
        if(nums[i]===0&&nums[j]!==0){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            i++;
            j++;
        }
        else if(nums[i]!=0){
            i++;
            j++;
        }
        else{
            j++;
        }
    }

    return nums;
};