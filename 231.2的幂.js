/**
 * 题目：
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 
 * 示例1：
 * 输入：1
 * 输出：true
 * 解释：2^0= 1
 * 示例2：
 * 输入：16
 * 输出：true
 * 解释： 24 = 16
 * 示例3：
 * 输入：218
 * 输出：false
 */

 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false;
    if(n==1) return true;
    while(n>=2){
        if(n % 2==1) return false;
        n=n/2;
    }
    return true;
}