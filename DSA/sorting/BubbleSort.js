/**
 * @param {number[]} arr
 */
class Solution {
    bubbleSort(arr) {
        // code here
        for(let i=0;i<arr.length-1;i++){
            // This will check if no swapping happens then already sorted directly breaks prevent unnecessary passes 
            let swapped=false;
            for(let j=0;j<arr.length-1-i;j++){
                if(arr[j+1]<arr[j]){
                    [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
                    swapped=true;
                    }
            }
            if(!swapped)break;
        }
        return arr;
    }
}