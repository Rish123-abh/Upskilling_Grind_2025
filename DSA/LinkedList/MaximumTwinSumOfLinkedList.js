/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let arr=[];
  while(head!==null){
    arr.push(head.val);
    head=head.next;
  }
  let sum=-Infinity;
  for(let i=0;i<arr.length;i++){
    if(i<=Math.floor(arr.length/2)-1){
        sum=Math.max(sum,arr[i]+arr[arr.length-i-1]);
    }
  }  
  return sum;
};