// Concept Learned -> Initialize the array using fill;

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    frequencyCount(arr) {
        // code here
        // let ans=[];
        // for(let i=0;i<arr.length;i++){
        //     ans[i]=0;
        // }
        let ans=new Array(arr.length).fill(0);
        
        for(let i=0;i<arr.length;i++){
            ans[arr[i]-1]++;
        }
        return ans;
    }
}