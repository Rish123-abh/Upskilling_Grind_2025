
class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
    const INT_MIN= -(2**31);
    let ans =INT_MIN;
        for(let i=0;i<arr.length;i++){
            ans=Math.max(arr[i],ans);
        }
        
        return ans;
        // code here
        
    }
}
