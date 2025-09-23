/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s) {
    let stack=[];
    let result=0;
    let sign = 1;

    for(let i=0;i<s.length;i++){
        if(s[i]>='0' && s[i]<='9'){
            let num=0;
            while(i<s.length && (s[i]>='0' && s[i]<='9') ){
                num=num*10+ parseInt(s[i]);
                i++;
            }
            result+=num*sign;
        i--;
        }
        if(s[i]==='+'){
            sign=1;
        }
        if(s[i]==='-'){
            sign=-1;
        }
        if(s[i]==='('){
            stack.push(result);
            stack.push(sign);
            result=0;
            sign=1;
        }
        if(s[i]===')'){
            let prevSign=stack.pop();
            let prevResult=stack.pop();
            result=prevResult+(prevSign*result);
        }
    }
    return result;

    
};