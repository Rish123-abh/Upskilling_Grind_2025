// Since there is only one unique number and all other numbers are present twice
// We can use XOR property here
// x^x=0 and x^0=x
// so ultimately all the numbers which are present twice will cancel out each other and we will be left with the unique number only
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans=0;
  for(let num of nums){
    ans^=num;
  }  
  return ans;
};  