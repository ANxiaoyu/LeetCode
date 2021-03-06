/**
 * 题目描述：
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 输入: "Hello World"
   输出: 5
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s==null || s.length==0) return 0;
    var start=false;
    var end=s.length-1;
    for(var i=s.length-1;i>=0;i--){
        if(s.charAt(i)!=' ' && !start){
            start=true;
            end=i;
        }
        if(start && (s.charAt(i)==' ' || i==0)){
           if(i==0 && s.charAt(i)!=' '){
            return end-i+1;
        }
            return end-i;
        }
    
    }
    return 0;
};