/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  // Brute Force approach
//   let ans=[];
//    for(let i=0;i<nums.length;i++){
//         let cnt=1;
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[j]==nums[i]){
//                 cnt++;
//             }
//         }
//         if(cnt>(Math.floor(nums.length/3))){
//             if(!ans.includes(nums[i]))
//                 ans.push(nums[i]);
//     }
//         }  
//         return ans;


// optimised version O(n) space and time  
// let ans=[];
// let map=new Map();
//     for(let num of nums){
//         map.set(num,(map.get(num)||0)+1);
//     }
//     console.log(map)
//     for(let [key,value] of map){
//         if(value>(Math.floor(nums.length/3))){
//             ans.push(key);
//         }
//     }
//     return ans;

// Boyer Moore algo for n\3 
// Logic is that atmost 2 element can exist >n/3

let cnt1=0;
let cnt2=0;
// These 2 elemengts keep track of ans 
let el1=Infinity;
let el2=Infinity;

for(let num of nums){
    if(cnt1==0&& num!=el2){
        cnt1=1;
        el1=num;
    }
    else if(cnt2==0&& num!=el1){
        cnt2=1;
        el2=num;
    }
    else if(num===el1){
        cnt1++;
    }
    else if(num===el2){
        cnt2++;
    }
    else{
        cnt1--;
        cnt2--;
    }
}
let ans=[];
cnt1=0;cnt2=0;
for(let num of nums){
    if(num===el1){
        cnt1++;
    }
    if(num===el2){
        cnt2++;
    }
}
if(cnt1>Math.floor(nums.length/3)){
    ans.push(el1);
}
if(cnt2>Math.floor(nums.length/3)){
    ans.push(el2);
}
return ans ;

};