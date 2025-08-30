/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans=[];
    let n=nums.length;
    nums.sort((a,b)=>a-b);
    let i=0;
    let j=i+1,k=n-1;

    while(i<n-2){
        // skip duplicates
        if(i>0 && nums[i]===nums[i-1]){ i++;         continue;}

    j=i+1,k=n-1
    while(j<k){
        let sum=nums[i]+nums[j]+nums[k];
        if(sum===0){
            ans.push([nums[i],nums[j],nums[k]]);
            
        while(j<k && nums[j]===nums[j+1])j++;
        while(j<k && nums[k]===nums[k-1])k--;
            j++;
            k--;
            }
        else if(sum<0) {
            j++;
        }
        else{
            k--;
        }
    }
    i++
    }
    return ans;

};