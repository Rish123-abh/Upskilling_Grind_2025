/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1 2 3 
// once 1 will swap with 1 then swap with 2 and then with 3
// then 2 will swap with 2 and then with 3 


// Backtracking approach
// we will swap the elements at each index and then call the function recursively for next index
// once we reach the end of the array we will push the current permutation to the ans array

 function recurSolution(nums,index,ans){
    if(index>=nums.length){
        ans.push([...nums]);
        return;
    }

    for(let i=index;i<nums.length;i++){
        [nums[index],nums[i]]=[nums[i],nums[index]];
        recurSolution(nums,index+1,ans);
        [nums[index],nums[i]]=[nums[i],nums[index]];

    }


 }
var permute = function(nums) {
  let ans=[];
//   let temp=[];

  recurSolution(nums,0,ans);  
  return  ans;
};