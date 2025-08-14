/**
 * @param {number} x
 * @return {boolean}
 */

// Problem Link -https://leetcode.com/problems/palindrome-number/

// Approach -> Reverse number and then check for -ve return false

// Concept Learned -> Reverse Number 
var isPalindrome = function(x) {
  if(x<0){
    return false;
  }
  let initial=x;
  let ans=0;
  while(x!=0){
    let digit=x%10;
    x=Math.floor(x/10);
    ans=ans*10+digit;
  } 
  if(ans==initial){
    return true;
  }
  return false;
};