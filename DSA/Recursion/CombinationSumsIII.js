/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 function recurseSolution(k,n,ans,temp,sum,index){
    if(sum===n && temp.length===k){
        ans.push([...temp]);
        return;
    }

    for(let i=index;i<=9;i++){
        sum+=i;
        if(sum>n) break;
        temp.push(i);
        recurseSolution(k,n,ans,temp,sum,i+1);
        let last=temp.pop();
        sum-=last;

    }
 }
var combinationSum3 = function(k, n) {
    let ans=[];
    recurseSolution(k,n,ans,[],0,1);
    return ans;
};