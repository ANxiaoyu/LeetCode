/**
 * 题目：
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
 * 
 * 说明：
 * 你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
 * 
 * 示例1：
 * 输入: root = [3,1,4,null,2], k = 1
 * 3
  / \
 1   4
  \
   2
   输出: 1

   示例2：
   输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
  输出: 3
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) { 
    var temp=[];
    kthSmall(root);
    function kthSmall(root){   //中序遍历
        if(!root) return 0;
        kthSmall(root.left);
        temp.push(root.val);
        kthSmall(root.right);
    }
    return temp[k-1];
};



//递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var leftcount=count(root.left);
    if(leftcount==k-1) return root.val;
    if(leftcount>k-1) return kthSmallest(root.left,k);
    return kthSmallest(root.right,k-leftcount-1);
};
var count=function(root){
    if(root==null) return 0;
    return 1+count(root.left)+count(root.right);
}