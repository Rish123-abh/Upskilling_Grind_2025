/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let ans=-1;
    let cnt=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            cnt++;
            ans=Math.max(ans,cnt);
        }
        if(s[i]===')'){
            cnt--;
        }
    }
    if(ans===-1){
        return 0;
    }
    return ans;
};