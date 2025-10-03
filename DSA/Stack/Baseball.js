/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let stack=[];
  for(let char of operations){
    if(char==='+'){
        let a=stack[stack.length-1];
        let b=stack[stack.length-2];
        stack.push(a+b);
    }
    else if(char==='C'){
        stack.pop();
    }
    else if(char==='D'){
        let a=stack[stack.length-1];
        stack.push(a*2);
    }
    else{
        stack.push(parseInt(char));
    }
  }  
let result=0;
  while(stack.length!==0){
    result+=stack.pop();
  }
  return  result;
};