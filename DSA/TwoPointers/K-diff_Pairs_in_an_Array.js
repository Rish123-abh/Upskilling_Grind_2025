/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let countElements=new Map();
  for(let num of nums){
    countElements.set(num,(countElements.get(num)||0)+1);
  }
  let ans=0;
  for(let [num,count] of countElements){
    if(k===0){
        if(countElements.get(num)>=2){
            ans++;
        }
    }
    else{
        if(countElements.has(num+k)){
            ans++;
        }
    }
  }
  return ans;
};