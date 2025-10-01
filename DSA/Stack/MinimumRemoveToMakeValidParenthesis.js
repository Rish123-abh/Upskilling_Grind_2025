
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack=[];
    let str=s.split("");
    for(let i=0;i<str.length;i++){
        if(str[i]==='('){
            stack.push(i);
        }
        else if(str[i]===')'){
            if(stack.length){
                stack.pop();
            }
            else{
                str[i]="";
            }
        }
    }
    for(let i of stack){
        str[i]="";
    }
    return str.join("");
};