/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {

    // Brute Force approach O(n) both space and time   and this is also the optimal approach
    let pos=[];
    let neg=[];
    for(let num of nums){
        num>0?pos.push(num):neg.push(num);
    }
    console.log(pos);
    console.log(neg);
    let ans=[];
    let i=0,j=0;k=0;
    while(k<nums.length){
        if(k%2==0){
            ans.push(pos[i++]);
        }
        else{
            ans.push(neg[j++]);
        }
        k++;
    }
    return ans;


};