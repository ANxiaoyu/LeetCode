/**
 * 题目：
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
 * 
 * 现有一个链表 -- head = [4,5,1,9]，它可以表示为:4——>5——>1——>9
 * 示例 1:
 * 输入: head = [4,5,1,9], node = 5
   输出: [4,1,9]
   解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
   
   示例 2:
   输入: head = [4,5,1,9], node = 1
   输出: [4,5,9]
   解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
     /* 因为，我们无法访问我们想要删除的节点 之前 的节点，我们始终不能修改该节点的 next 指针。相反，我们必须将想要删除的节点的值替换为它后面节点中的值，然后删除它之后的节点。*/
     node.val=node.next.val;
     node.next=node.next.next;
}