/**
 *
 * insert
 * @param {number[]} arr
 * @param {number} i
 *
 * insertionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    insertionSort(arr) {
        // code here
        for(let i=1;i<arr.length;i++){
            let temp=arr[i];
            let j=i-1
            for(j;j>=0;j--){
                if(temp<arr[j]){
                    arr[j+1]=arr[j];
                }
                else{
                    break;
                }
            }
            arr[j+1]=temp;
        }
        return arr;
    }
}