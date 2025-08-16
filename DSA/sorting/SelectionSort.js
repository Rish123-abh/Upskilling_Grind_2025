class Solution {
    /**
     * @param {number[]} arr
     * @returns {number[]}
     */

    // Function to implement selection sort
    selectionSort(arr) {
        // your code here
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[j]<arr[i]){
                    [arr[j],arr[i]]=[arr[i],arr[j]];
                }
            }
        }
        return arr;
    }
}