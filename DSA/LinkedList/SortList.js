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
 function mergeList(l1,l2){
      const dummy = new ListNode(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2;
        return dummy.next;
 }
var sortList = function(head) {
    if (!head || !head.next) return head;


    let prev=null,slow=head,fast=head;

    while(fast && fast.next){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    // first half
    prev.next=null;
    let l1=sortList(head);
    let l2=sortList(slow);

    return mergeList(l1,l2);
};