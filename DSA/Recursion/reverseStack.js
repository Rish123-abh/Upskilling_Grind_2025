/**
 * @param {string} St
 * @returns {string}
 */
// Approach: Recursion
// We will pop the top element and call reverseStack for remaining stack
// When stack becomes empty we will insert the popped element at bottom of stack
function insertAtBottom(s,top){
    if(s.length===0){
        s.push(top);
        return;
    }
    
    let topElement=s.pop();
    insertAtBottom(s,top);
    s.push(topElement);
}
function reverseStack(s){
    if(s.length===0){
        return;
    }
    let top=s.pop();
    reverseStack(s);
    
    insertAtBottom(s,top);
}
class Solution {
    reverse(St) {
        // code here
        reverseStack(St);
        
    }
}