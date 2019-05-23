/**
 * 题目描述：
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例1：
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 示例2：
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 */

 /**
  * 方法：动态规划
  */

  /**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s==null || s.length==0) return 0;
    var dp= new Array(s.length);
    
    var res=0;
    for(var i=0;i<s.length;i++){
        if(i>0 && s[i]==')' && s[i-dp[i-1]-1]=='('){
           
            dp[i]=dp[i-1]+2+(i-dp[i-1]-2>0?dp[i-dp[i-1]-2]:0);
            res=Math.max(res,dp[i]);
                
            }else{
                dp[i]=0;
            }
        }
      
    
    return res;
};