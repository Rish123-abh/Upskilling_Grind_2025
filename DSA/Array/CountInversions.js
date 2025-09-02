/**
 * @param {number[]} arr
 * @returns {number}
 */


function merge(arr,start,end,mid,ans){
    let temp=[];
    let i=start;
    let j=mid+1;
    while(i<=mid && j<=end){
        if(arr[i]<=arr[j]){
            temp.push(arr[i]);
            i++;
        }
        else{
            if(arr[i]>arr[j]){
                ans[0]=ans[0]+mid+1-i;
            }
            temp.push(arr[j]);
            j++;
        }
    }
    while(i<=mid){
        temp.push(arr[i++]);
    }
    while(j<=end){
        temp.push(arr[j++]);
    }
    
    for(let i=start;i<=end;i++){
        arr[i]=temp[i-start];
    }
}

function mergeSort(arr,i,j,ans){
    if(i>=j){
        return;
    }
    let mid=Math.floor((i+j)/2);
    mergeSort(arr,i,mid,ans);
    mergeSort(arr,mid+1,j,ans);
    merge(arr,i,j,mid,ans);
}
class Solution {
    inversionCount(arr) {
        let ans=[0];
        // code here
        mergeSort(arr,0,arr.length-1,ans);
        return ans[0];
        
    }
}