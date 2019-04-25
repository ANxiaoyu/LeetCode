/**
 * 题目描述：
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例：
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 */

 /**
  * 方法：递归
  * 递归三部曲：
  * 1.找终止条件：本题终止条件很明显，当递归到链表为空或者链表只剩一个元素的时候，没得交换了，就终止了。
  * 
  * 2.找返回值：返回给上一层递归的值应该是 已经交换完成后的子链表。
  * 
  * 3.单次的过程做了什么：因为递归是重复做一样的事情，所以从宏观上考虑，只用考虑某一步是怎样完成的。
  * 本题假设 待交换的两个节点分别是 haed和next，next的应该接受上一级返回的子链表。就相当于是一个含三个节点的链表交换前两个节点
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
 * @return {ListNode}
 */
var swapPairs=function(head){
    if(head==null || head.next==null){
        return head;
    }
    var next=head.next;
    head.next=swapPairs(next.next);
    next.next=head;
    return next;
}