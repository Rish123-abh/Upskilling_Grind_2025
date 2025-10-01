/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[];
    for( let ch of tokens){
        console.log("Stack",stack);
        if(ch==='+'){
            stack.push(stack.pop()+stack.pop());
        }
        else if(ch==='-'){
            let a=stack.pop();
            let b=stack.pop();
            stack.push(b-a);
        }
        else if(ch==='/'){
            let a=stack.pop();
            let b=stack.pop();
            stack.push(Math.trunc(b/a));
        }
        else if(ch==='*'){
            
            stack.push(stack.pop()*stack.pop());
        }
        else{
            stack.push(parseInt(ch));
        }
    }
    console.log(stack);
    return stack[0];
};