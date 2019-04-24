/**
 * 题目描述：
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 示例：
 * 例如，给出 n = 3，生成结果为：
 * [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
  ]
 */

 /**
  * 解题思路：回溯，递归
  * 三个原则：
  * 1.左括号没用完之前都可以随便用
  * 2.右括号数量必须小于左括号的时候才能用
  * 3.右括号用完，代码结束
  */

  /**
   * @param {number} n
   * @return {string[]}
   */
  var generateParenthesis=function(n){
      var result=new Array();
      generate("",n,0,0,result);
      return result;
  }

  function generate(str,n,left,right,result){
      if(right==n){
          result.push(str);
          return;
      }
      //加左括号
      if(left<n){
          generate(str+'(',n,left+1,right,result);
      }
      //加右括号
      if(right<left){
          generate(str+')',n,left,right+1,result);
      }
  }