/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depth=0;
    let result="";
    for(let i=0;i<s.length;i++){

        if(s[i]==='('){
        // This checks for outermost layer it already exist and its inner brackets 
            if(depth>0){
                result+=s[i];
            }
            depth++;
        }
        else{
            // this closes outermost layer 
            depth--;
            if(depth>0){
                result+=s[i];

            }
        }
    }
    return result;
};