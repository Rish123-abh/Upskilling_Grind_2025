    /**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // This is first approach  On2 O1 space
    // for(let i=0;i<=nums.length;i++){
    //     if(!nums.includes(i)){
    //         return i;
    //     }
    // }

    // This is second approach On1  On space
    // let ans=new Array(nums.length+1).fill(0);

    // for(let i=0;i<nums.length;i++){
    //     ans[nums[i]]++;
    // }
    // return ans.findIndex((i)=>i===0);

    // Third approach OPtimised in On and O(1) space
    // let n=nums.length;
    // let expectedSum=Math.floor(n*(n+1))/2;
    // let actualSum=nums.reduce((a,b)=>a+b,0);
    // return expectedSum-actualSum;

    // Fourth Approach 
    // using XOR x^x=0; and x^0=x;
     let xor = 0;
    let n = nums.length;

    for (let i = 0; i <= n; i++) {
        xor ^= i; // XOR with range
    }

    for (let num of nums) {
        xor ^= num; // XOR with array elements
    }

    return xor; 

};