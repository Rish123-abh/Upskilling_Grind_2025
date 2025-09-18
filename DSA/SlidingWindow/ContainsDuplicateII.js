/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    // Brute Force TLE 
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if((nums[i]===nums[j]) && (Math.abs(i-j)<=k)){
    //             return true;
    //         }
    //     }
    // }
    // return false;

// Optimised using Sliding Window 

if(k===0){
    return false;
}
let left=0,right=0;
let set=new Set();
while(right<nums.length){
  if(set.has(nums[right])){
    return true;
  }
  set.add(nums[right]);
  if(right-left>=k){
    set.delete(nums[left]);
    left++;
  }
  right++;
}
return false;
};