/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // O(n) space and time 
    // if(head===null) return null;
    // let map=new Map();
    // let curr=head;
    // while(curr!=null){
    //     if(map.get(curr)===true){
    //         return curr;
    //     }
    //     map.set(curr,true);
    //     curr=curr.next;
    // }

    if(head==null){
        return null;
    }
     let slow=head,fast=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            slow=head;
            while(slow!==fast){
                slow=slow.next;
                fast=fast.next;
            }
            return slow;
        }
        }

    return null;
};