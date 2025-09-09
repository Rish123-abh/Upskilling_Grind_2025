/**
 * @param {number} n
 * @return {string[]}
 */

// Approach: Backtracking
// We will keep track of open and close brackets used so far
// If open<n we can add (
// If close<open we can add )
// When ans length becomes 2*n we push it to result
 function generate(n,result,ans,open,close){
    if(ans.length===2*n){
        result.push(ans);
        return;
    }
if(open<n){
    
    generate(n,result,ans+'(',open+1,close);
}
if(close<open){
    
    generate(n,result,ans+')',open,close+1);
}

 }
var generateParenthesis = function(n) {
    let result=[];
    generate(n,result,"",0,0);
    return result;
};