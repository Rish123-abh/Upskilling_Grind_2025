/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

// Brute Force Approach 
// let cnt=0;
// let sum=0;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]===k){
//         cnt++;
//     }
//     sum=nums[i];
//     for(let j=i+1;j<nums.length;j++){
//         sum+=nums[j];
//         if(sum===k){
//             cnt++;
//         }
//     }
// }
// return cnt;


// Optimised Approach using prefix sum and map
  let prefixSum=0;
  let map=new Map();
  map.set(0,1);
let cnt=0;
  for(let i=0;i<nums.length;i++){
    prefixSum+=nums[i];

    if(map.has(prefixSum-k)){
        cnt=cnt+map.get(prefixSum-k);
    }
    map.set(prefixSum,map.get(prefixSum)+1||1);

  }
  return cnt;



};