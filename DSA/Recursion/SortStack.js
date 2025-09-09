// User function Template for javascript
/**
 * @param {number[]} stack
 *
 * @return {NaN}
 */
// Appraoch: Recursion
// We will pop the top element and call sortStack for remaining stack
// When stack becomes empty we will insert the popped element at correct position in sorted stack
function sortStack(s){
    if(s.length===0){
        return;
    }
    let topElement=s.pop();
    sortStack(s);
    insertAtCorrectPostion(s,topElement);
}
function insertAtCorrectPostion(s,topElement){
    if(s.length===0 || s[s.length-1]<=topElement){
        s.push(topElement);
        return;
    }
    
    let top=s.pop();
    insertAtCorrectPostion(s,topElement);
    s.push(top);
}
class Solution {
    
    sort(stack) {
    sortStack(stack);
    }
}