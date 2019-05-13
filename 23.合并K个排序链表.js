/**
 * 题目描述：
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例：
 * 输入:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6 
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 */

 /**
  * 方法：分治：分而治之，链表两两合并
  */

  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length==0)
        return null;
    if(lists.length==1)
        return lists[0];
    if(lists.length==2){
        return mergeTwoLists(lists[0],lists[1]);
    }
    
    var mid=lists.length/2;
    var l1=new Array();
    l1=[mid];
    for(var i=0;i<mid;i++){
        l1[i]=lists[i];
    }
    
    var l2=new Array();
    l2=[lists.length-mid];
    for(var j=0,i=mid;i<lists.length;i++,j++){
        l2[j]=lists[i];
    }
    return mergeTwoLists(mergeKLists(l1),mergeKLists(l2));
};

function mergeTwoLists(l1,l2){
    if(l1==null) return l2;
    if(l2==null) return l1;
    
    var head=null;
    if(l1.val<=l2.val){
        head=l1;
        head.next=mergeTwoLists(l1.next,l2);
    }else{
        head=l2;
        head.next=mergeTwoLists(l1,l2.next);
    }
    return head;
}