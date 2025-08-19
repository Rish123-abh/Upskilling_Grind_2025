// Concept Learned -> Whenever need to do in circular manner in array , use (i+1)%nums.length
// This will help to avoid index out of bound error



// Approach-> Need to check for drop that means the point where the array is not sorted
// If there is more than one drop then it is not sorted
// If there is no drop then it is sorted
// If there is one drop then it is rotated sorted array


// example: [3,4,5,1,2]
// In this example there is one drop at 5 to 1
// So it is rotated sorted array

// example: [1,2,3,4,5]
// In this example there is no drop so it is sorted array   

// example: [2,1,3,4]
// In this example there is two  drop at 2 to 1 and 4 to 2
// So it is not a  rotated sorted array


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let cnt=0;
    for(let i=0;i<nums.length;i++){
        if(nums[(i+1)%nums.length]<nums[i]){
            cnt++;
        }
    }

    if(cnt<=1){
        return true;
    }
    return false;
};