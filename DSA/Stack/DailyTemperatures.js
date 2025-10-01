/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let n=temperatures.length;
  let stack=[n-1];
  let ans=Array(n).fill(0);
  for(let i=n-2;i>=0;i--){
    while(stack.length!==0 && temperatures[i]>=temperatures[stack[stack.length-1]]){
        stack.pop();
    }
    if(stack.length>0){
        ans[i]=stack[stack.length-1]-i;
    }
        stack.push(i);
  }  

  return ans;
};   