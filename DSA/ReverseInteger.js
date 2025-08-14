// Problem Link- https://leetcode.com/problems/reverse-integer/

// Approach-> Need to find last digit and reduce the number by floor divison 

// Concept Learned -> Math.trunc() function is used for -ve numbers and +ve numbers  
// this will return integer floor 
// INT_MIN and MAX are not inside any library like in c++ We need to handle it manually as shown in code  


/**
 * @param {number} x
 * @return {number}
 */



const INT_MIN = -(2 ** 31);      
const INT_MAX = 2 ** 31 - 1;       
var reverse = function(x) {
  let ans=0;
  while(x!=0){
    let digit=x%10;
    x=Math.trunc(x/10);
        ans=ans*10+digit;
        if(ans<INT_MIN || ans>INT_MAX) return 0;
  }
  return ans;

};