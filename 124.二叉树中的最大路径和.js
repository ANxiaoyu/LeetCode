/**
 * 题目：
 * 给定一个非空二叉树，返回其最大路径和。
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 * 
 * 示例 1:
 * 输入: [1,2,3]
 *     1
      / \
     2   3
    输出: 6
    
    示例 2:
    输入: [-10,9,20,null,null,15,7]
    -10
   / \
  9  20
    /  \
   15   7
   输出: 42
 */

 /**
  * 方法：递归。暂时未运行成功
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
 * @return {number}
 */

var maxPathSum = function(root) {
    var max_sum = Number.MIN_VALUE;

    max_gain(root);
    
    function max_gain(node) {
    if(node == null) return 0;
    if(node == 1) return node.val;
    
    var left_gain = Math.max(max_gain(node.left), 0);
    var right_gain = Math.max(max_gain(node.right), 0);
    
    var price_newpath = node.val + left_gain + right_gain;
    
     max_sum = Math.max(max_sum, price_newpath);
    
    return node.val + Math.max(left_gain, right_gain);
}
    
    return max_sum;
};
 