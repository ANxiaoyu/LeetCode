/**
 * 题目描述：
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例：
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * 
 * 说明：
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 */

 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams=function(strs){
    var l=[],res=[];
    for(var i=0;i<strs.length;i++){
        var k=strs[i].split('').sort().join('');
        if(l.indexOf(k)==-1){
            l.push(k);
            res.push([strs[i]]);
        }else{
            var index=l.indexOf(k);
            res[index].push(strs[i]);
        }
    }
    return res;
}