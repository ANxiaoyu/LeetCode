/**
 * 题目：
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */

 /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var carry=0; //进位标记
     var res=[];
     var alen=a.length-1;
     var blen=b.length-1;
     while(alen>=0 || blen>=0){ //a或b还有位可以相加
         var sum=(+a[alen] || 0) + (+b[blen]||0)+carry; //alen blen可能为负数值转化为0
         carry=sum>=2?1:0;
         res.push(sum%2);
         alen--;
         blen--;
     }
     if(carry){
         res.push(1);
     }
     return res.reverse().join('');
 };