

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function recurseSolution(nums,ans,index){
    if(index>=nums.length){
        ans.push([...nums]);
        return;
    }
    let used=new Set();
    for(let i=index;i<nums.length;i++){
        if(used.has(nums[i])){
            continue;
        }
        used.add(nums[i]);
        [nums[i],nums[index]]=[nums[index],nums[i]];
        recurseSolution(nums,ans,index+1);
        [nums[i],nums[index]]=[nums[index],nums[i]];
    }
}

var permuteUnique = function(nums) {
    let ans=[];
    nums.sort((a,b)=>a-b);
    recurseSolution(nums,ans,0);
    return ans;
};