/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 function reverse(temp){
    let prev=null;
    let nextNode=null;
    let curr=temp;
    while(curr!==null){
        nextNode=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nextNode;

    }
return prev;
 }
 function KthNode(temp,k){
    k--;
    while(temp!==null && k>0){
        k--;
        temp=temp.next;
    }
    return temp;
 }
var reverseKGroup = function(head, k) {
 let temp=head;
 let prevNode=null;
 while(temp!==null){
    let KNode=KthNode(temp,k);
    if(!KNode){
        if(prevNode){
            prevNode.next=temp;
        }
        break;
    }
    let nextNode=KNode.next;
    KNode.next=null;
    let res=reverse(temp);
    if(temp===head){
        head=KNode;
    }
    else{
        prevNode.next=KNode;
    }
    prevNode=temp;
    temp=nextNode;
 }
return head;
};