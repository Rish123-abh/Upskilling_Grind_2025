/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 function reverse(head){
    let curr=head;
    let prev=null;
    let nextNode=null;
    while(curr!=null){
        nextNode=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nextNode;
    }
    return prev;
 }
var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
  
    let reversedList=slow;
    // let dummy=slow;
    reversedList=reverse(slow);

    while(reversedList!==null ){
        if(head.val!==reversedList.val){
            return false;
        }
        reversedList=reversedList.next;
        head=head.next;
    }
    return true;

};