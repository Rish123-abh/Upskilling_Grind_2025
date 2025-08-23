/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // THis is brute force approach
    // let cnt0=0,cnt1=0,cnt2=0;
    // for(let num of nums){
    //     if(num==0){
    //         cnt0++;
    //     }
    //     if(num==1){
    //         cnt1++;
    //     }
    //     if(num==2){
    //         cnt2++;
    //     }
    // }
    //     let i=0;
    //     while(cnt0>0){
    //         nums[i++]=0;
    //         cnt0--;}
    //     while(cnt1>0){
    //         nums[i++]=1;
    //         cnt1--;}
    //     while(cnt2>0){
    //         nums[i++]=2;
    //         cnt2--;
    //     }


// This is optimised approach with three pointers

// i is for 0s
// j is for 2s  
// k is for current element

let i=0;
let j=nums.length-1;
let k=0;

while(k<=j){
    if(nums[k]==1){
        k++;
    }
    else if(nums[k]==0){
        [nums[k],nums[i]]=[nums[i],nums[k]];
        i++;
        k++;
    }
    else if(nums[k]==2){
        [nums[k],nums[j]]=[nums[j],nums[k]];
        j--;
    }
}

};