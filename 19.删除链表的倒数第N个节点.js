/**
 * 题目：
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.

 *当删除了倒数第二个节点后，链表变为 1->2->3->5.
*/

 
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /**
  * 方法：快慢指针
  * 
  * 思路：快慢指针都从头开始走，但快指针先走n步，然后快慢指针再同时走。
  * 当快指针fast.next走到头的时候，慢指针刚好走到待删除的节点的前驱节点，
  * 即slow.next = 删除节点，然后就直接slow.next = slow.next.next删除即可。
  */

  var removeNthFromEnd=function(head,n){
      var fast=head;
      var slow=head;
      for(var i=1;i<=n;i++){
          fast=fast.next;
      }
      //删除的是头节点
      if(fast==null){
          
          return head.next;
      }
      //将slow移动到倒数第n个节点的前一个节点
      while(fast.next!==null){
          fast=fast.next;
          slow=slow.next;
      }
      slow.next=slow.next.next;
      return head;
  }