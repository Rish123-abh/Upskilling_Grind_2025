// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Brute force approach
    // for(let i=0;i<nums.length;i++){
    //     let cnt=1;
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[j]==nums[i]){
    //             cnt++;
    //         }
    //     }
    //     if(cnt>(Math.floor(nums.length/2))){
    //         return nums[i];
    // }
    //     }


    // another optimised approach IN O(n) both time and space 
    let map=new Map();
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1);
    }
    for(let num of nums){
        if(map.get(num)>(Math.floor(nums.length/2))){
            return num;
        }
    }

    // Most optimised approach in O(n) and O(1)  Booyer Moore Algorithm 

    let candidate=null;
    let count=0;
    for(let num of nums){
        if(count==0){
            candidate=num;
            count==1;
        }
        else if(num==candidate){
            count++;
        }
        else{
            count--;
        }
    }
    return candidate;

};