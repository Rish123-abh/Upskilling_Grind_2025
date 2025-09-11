/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

 function recurseSol(n,k,ans,temp,index){
    if(temp.length===k){
        ans.push([...temp]);
        return;
    }

    for(let i=index;i<=n;i++){
        temp.push(i);
        recurseSol(n,k,ans,temp,i+1);
        // need to backtrack remove the last element so that we can try next element
        temp.pop();
    }
 }
var combine = function(n, k) {
    let ans=[];
    let temp=[];
    recurseSol(n,k,ans,temp,1);
    return ans;
};