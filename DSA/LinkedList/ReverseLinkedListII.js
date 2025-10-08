/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(head.next===null){
        return head;
    }
    // let arr=[];
    // let temp=head;
    // while(temp!==null){
    //     arr.push(temp.val);
    //     temp=temp.next;
    // }
    // let leftI=left-1;
    // let rightI=right-1
    // while(leftI<rightI){
    //     [arr[leftI],arr[rightI]]=[arr[rightI],arr[leftI]];
    //     leftI++;
    //     rightI--;
    // }
    // // console.log(arr);
    // let dummy=new ListNode(0,null);
    // let ans=dummy;
    // // console.log("Dummy",dummy);
    // for(let num of arr){
    //     let temp=new ListNode(num,null);
    //     ans.next=temp;
    //     ans=ans.next;
    // }
    // // console.log(dummy);
    // return dummy.next;


    // Optimised approach without extra space 
    let dummy=new ListNode(0,head);
    let start=1;
    let temp=dummy.next;
    // let str=temp;
    let prevN=dummy;
    // Finding Start node of reverse 
    for(start;start<left;start++){
        prevN=temp;
        temp=temp.next;
    }
    // let nextNode=head;
    let str=temp;
    let prev=null;
    let curr=str;
    let nextN=null;
    for(let i=0;i<=right-left&& curr!==null ;i++){
        nextN=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nextN;
    }
    console.log(prev);
    prevN.next=prev;
    str.next=curr;
    return dummy.next;



};