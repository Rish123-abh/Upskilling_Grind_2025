/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Approach
 function recurseSolution(candidates,target,ans,temp,sum,index){
    if(sum===target){
        ans.push([...temp]);
        return;
    }

    for(let i=index;i<candidates.length;i++){
        if(sum+candidates[i]>target) break;
        temp.push(candidates[i]);
        sum+=candidates[i];
        recurseSolution(candidates,target,ans,temp,sum,i);
        let last=temp.pop();
        sum-=last;

    }


 }
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    let ans=[];
    recurseSolution(candidates,target,ans,[],0,0);
   return ans;
};