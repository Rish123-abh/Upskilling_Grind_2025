/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let result=new ListNode(-1);
  let temp=result;

  let curr1=list1,curr2=list2;

  while(curr1!==null &&  curr2!==null){
    if(curr1.val<=curr2.val){
        temp.next=curr1;
        temp=temp.next;
        curr1=curr1.next;
    }
    else{
        temp.next=curr2;
        temp=temp.next;
        curr2=curr2.next;
    }
  }
  while(curr1!==null){
    temp.next=curr1;
        temp=temp.next;
        curr1=curr1.next;
  }
  while(curr2!==null){
    temp.next=curr2;
        temp=temp.next;
        curr2=curr2.next;
  }

  return result.next;

};