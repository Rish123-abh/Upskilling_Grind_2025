/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Brute Force Approach using space O(n);
    // let newNode=new ListNode(-1);
    // let dummy=newNode;
    // let arr=[];
    // while(head!==null){
    //     arr.push(head.val);
    //     head=head.next;
    // }
    // console.log(arr);
    // for(let i=0;i<arr.length;i++){
    //     if(i!==arr.length-n){
    //         let temp= new ListNode(arr[i]);
    //         dummy.next=temp;
    //         dummy=dummy.next;
    //     }
    // }
    // return newNode.next;


    // Two Pointer Approach
    let dummy=new ListNode(0,head);
    let slow=dummy;
    let fast=dummy;

    for(let i=0;i<=n;i++){
        fast=fast.next;
    }
    while(fast!==null){
        slow=slow.next
        fast=fast.next
    }
    slow.next=slow.next.next;
    return dummy.next;
};