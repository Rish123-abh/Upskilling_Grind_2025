/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// approach is to find the pivot or break point from right side where nums[i]<nums[i+1]
// then find the next greater element from right side of pivot and swap them
// then reverse everything after pivot index to get the next permutation in lexographical order

 function reverseArr(nums,i,j){
    while(i<j){
        [nums[i],nums[j]]=[nums[j],nums[i]];
        i++;
        j--;
    }
 }
var nextPermutation = function(nums) {
  // brute force find all permutation place them in sorted order in array and then find the  given arr in that array and return next index 


  // Optimised Version 

  // Finding pivot or break point 
    let index=-1;

  for(let i=nums.length-2;i>=0;i--){
    if(nums[i]<nums[i+1]){
        index=i;
        break;
    }
  }
  // handling the case where no permuation is possible so rreturn the sorted array in ascending order
  if(index==-1){
  return   nums.reverse();
  }

  // Swap with next great element 
  let j=nums.length-1;
            while(j>=index+1){
            if(nums[j]>nums[index]){
                [nums[index],nums[j]]=[nums[j],nums[index]];
                break;
            }
            j--;
        }

// Now reverse everything after index ;
reverseArr(nums,index+1,nums.length-1);
return nums;
};