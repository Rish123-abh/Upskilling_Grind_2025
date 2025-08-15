// Concept Learned -> Join function in array adds the element of array into string 
// here console.log() not worked since it prints element into a new line 


/**
 * @param {number} n
 * @returns { }
 */
function recur(n,arr) {
        // code here
        if(n==1){
            arr.push(n);
            return ;
        }
        recur(n-1,arr);
        arr.push(n);
        
    }
class Solution {
    printNos(n) {
        let arr=[];
        // code here
        recur(n,arr);
        console.log(arr.join(" "));
    }
}
