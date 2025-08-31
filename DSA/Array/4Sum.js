/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // Brute force will be O(n^4)
  //  Optimised approach using O(n^3) and O(1) space
    
  // First 2 loops for fixing 1st 2 elements and then using 2 pointer approach for other 2 elements
  // Also taking care of duplicates
  let n=nums.length;
    nums.sort((a,b)=>a-b);
    let ans=[];
  for(let i=0;i<n-3;i++){

    if(i>0 && nums[i]===nums[i-1])continue;
    for(let j=i+1;j<n-2;j++){

    if(j>i+1 && nums[j]===nums[j-1])continue;
        let l=j+1,m=n-1;
        while(l<m){
            let sum=nums[i]+nums[j]+nums[l]+nums[m];
            if(sum===target){
                ans.push([nums[i],nums[j],nums[l],nums[m]]);
                while(l<m && nums[l]===nums[l+1]){
                    l++;
                }
                while(l<m && nums[m]===nums[m-1]){
                    m--;
                }
                l++;
                m--;
            }
            else if(sum<target){
                l++;
            }
            else{
                m--;
            }
        }
    
    }
    
  }   
return ans;
};