/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
 function mergearr(arr,l,r,mid){
     let temp=[];
    let firstIndex=l;
    let secondIndex=mid+1;
     while(firstIndex<=mid && secondIndex<=r){
         if(arr[firstIndex]<=arr[secondIndex]){
             temp.push(arr[firstIndex++]);
         }
         else{
             temp.push(arr[secondIndex++]);
         }
     }
     while(secondIndex<=r){
             temp.push(arr[secondIndex++]);
     }
     while(firstIndex<=mid){
             temp.push(arr[firstIndex++]);
     }
     let i=l;
     while(i<=r){
         arr[i]=temp[i-l];
         i++;
     }
 }
 function merge(arr, l, r) {
      if(l>=r){
         return;
     }
     let mid=Math.floor((l+r)/2);
     merge(arr,l,mid);
     merge(arr,mid+1,r);
     mergearr(arr,l,r,mid);
 }
class Solution {
    mergeSort(arr, l, r) {
    merge(arr, l, r);
        // code here
        
    }
}