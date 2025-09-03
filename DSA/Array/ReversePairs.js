/**
 * @param {number[]} nums
 * @return {number}
 */



function merge(nums,start,end,mid,ans){

    // Check for answer before and then merge 
    let j=mid+1;
    for(let i=start;i<=mid;i++){    
        while(j<=end && nums[i]>2*nums[j]){
            j++;
        }
            ans[0]+=j-(mid+1);
    }


    let temp=[];
    let i=start;
     j=mid+1;
    while(i<=mid && j<=end){
        if(nums[i]<=nums[j]){
            temp.push(nums[i]);
            i++;
        }
        else{
            temp.push(nums[j]);
            j++;
        }
    }
    while(i<=mid){
        temp.push(nums[i++]);
    }
    while(j<=end){
        temp.push(nums[j++]);
    }
    
    for(let i=start;i<=end;i++){
        nums[i]=temp[i-start];
    }
}

function mergeSort(nums,i,j,ans){
    if(i>=j){
        return;
    }
    let mid=Math.floor((i+j)/2);
    mergeSort(nums,i,mid,ans);
    mergeSort(nums,mid+1,j,ans);
    merge(nums,i,j,mid,ans);
}
var reversePairs = function(nums) {
    let ans=[0];
    mergeSort(nums,0,nums.length-1,ans);
    return ans[0];
};