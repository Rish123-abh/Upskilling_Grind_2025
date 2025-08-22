//
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count=0;
  let ans=-Infinity;
  for(let num of nums){
    if(num==0){
        ans=Math.max(ans,count);
        count=0;
    }
    else{
        count+=1;
    }
  }
  ans=Math.max(ans,count);
  return ans;  
};