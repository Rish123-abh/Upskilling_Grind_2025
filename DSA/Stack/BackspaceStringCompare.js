/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // This is brute Force 
    let stack1=[];
    let stack2=[];

    for(let i=0;i<s.length;i++){
        if(s[i]==='#'){
            if(stack1.length!==0){
            stack1.pop();
            }
        }
        else{
            stack1.push(s[i]);
        }
    }

    for(let i=0;i<t.length;i++){
        if(t[i]==='#'){
            if(stack2.length!==0){
            stack2.pop();
            }
        }
        else{
            stack2.push(t[i]);
        }
    }
    while(stack1.length!==0 && stack2.length!==0){
        if(stack1.pop()!==stack2.pop()){
            return false;
        }
    }
    if(stack1.length===0 && stack2.length===0){
        return true;
    }
    else{
    return false;
    }
};