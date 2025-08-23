/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// approach to solve the problem of finding two numbers in an array that add up to a specific target.
// We can use a hash map to store the numbers we have seen so far and their indices
var twoSum = function(nums, target) {
  let map=new Map();
  for(let i=0;i<nums.length;i++){
    if(map.has(target-nums[i])){
        return [i,map.get(target-nums[i])];
    }
    if(!map.has(nums[i])){
        map.set(nums[i],i);
    }
  }  
};