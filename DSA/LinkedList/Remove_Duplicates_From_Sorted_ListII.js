/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
if( head===null|| head.next===null){
    return head;
}
  let dummy=new ListNode(0,head);
  let pre=dummy;
let prev=dummy.next;
let curr=dummy.next.next;
while(curr!==null){
if(prev.val===curr.val){
    while(curr!==null && curr.val===prev.val ){
        curr=curr.next;
    }
    pre.next=curr;
    prev=curr;
    if(curr!==null){
    curr=curr.next;
    }
}
else{
    pre=prev;
    prev=curr;
    curr=curr.next;
}
}
return dummy.next;
};