/**
 * 题目描述：
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例：
 * 输入: [1,1,2]
 * 输出:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique=function(nums){
    if(nums.length==0){
        return nums;
    }
    var res=[];
    var perm=function(arr,result){
        if(result.length==nums.length){
            res.push(result);
            return;
        }
        var k=[...new Set(arr)];
        for(var i=0;i<k.length;i++){
            var index=arr.indexOf(k[i]);
            perm(arr.slice(0,index).concat(arr.slice(index+1)),result.concat(k[i]));
        }
        return;
    }
    perm(nums,[]);
    return res;
}