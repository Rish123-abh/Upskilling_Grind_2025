
// Key takeaways:
// 1. Sorted array + in-place modification → use Two-Pointer.
// 2. Filtering elements → one pointer writes, one pointer scans.
// 3. For duplicates → compare current with previous.


/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
  if(nums.length==1){
    return nums.length;
  }
  let i =0;// Track of Unique element 
  let j=1; // for iterating the array and check for duplicates 
  let cnt=1;
  
    while(i<nums.length&&j<nums.length){
    if(nums[i]===nums[j]){
        j++;
    }
    else{
        [nums[i+1],nums[j]]=[nums[j],nums[i+1]];
        i++;
        j++;
        cnt++;
    }
    }
    return cnt;

};