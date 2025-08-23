/**
 * @param {Number[]} arr
 * @returns {Number}
 */
class Solution {
    maxLength(arr) {
        // code here
        let ans=0;
        let map=new Map();
        let prefixSum=0;
        for(let i=0;i<arr.length;i++){
            prefixSum+=arr[i];
            if(prefixSum===0){
                ans=Math.max(ans,i+1);
            }
        
            if(!map.has(prefixSum)){
                map.set(prefixSum,i);
            }
            if(map.has(prefixSum)){
                ans=Math.max(ans,i-map.get(prefixSum));
            }
        }
        return ans;
    }
}