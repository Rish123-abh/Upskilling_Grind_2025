/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 function recurseSolution(nums,ans,path,index){
    for(let i=index;i<nums.length;i++){
        let temp=[...path,nums[i]];
        ans.push(temp);
        recurseSolution(nums,ans,temp,i+1);
    }
 }
var subsets = function(nums) {
  let ans=[[]];
  let path=[];
  recurseSolution(nums,ans,path,0);
  return ans;
};