/**
 * @param {number[]} mices
 * @param {number[]} holes
 * @return {number}
 */
class Solution {
    assignHole(mices, holes) {
        mices.sort((a,b)=>a-b);
        holes.sort((a,b)=>a-b);
        // code here
        let ans=-Infinity;
        for(let i=0;i<mices.length;i++){
            ans=Math.max(ans,Math.abs(mices[i]-holes[i]));
        }
        return ans;
    }
}