// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {

    searchInSorted(arr, k) {
        // your code here
        let i=0;
        let j=arr.length-1;
        
        while(i<=j){
            let mid=Math.floor((i+j)/2);;
            if(arr[mid]===k){
                return true;
            }
            else if(arr[mid]<k){
                i=mid+1;
            }
            else{
                j=mid-1;   
            }
        }
        return false;
    }
}