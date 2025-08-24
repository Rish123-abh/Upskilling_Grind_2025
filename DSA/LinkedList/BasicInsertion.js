/**
 * class Node{
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

// Need to convert an array to a linked list
// Approach is to create a new node for each element in the array and link them together
class Solution {
    arrayToList(arr) {
        let head=new Node(arr[0]);
            let curr=head;
        // code here
        for(let i=1;i<arr.length;i++){
            let node=new Node(arr[i]);
            curr.next=node;
            curr=curr.next;
        }
        return head; 
    }
}