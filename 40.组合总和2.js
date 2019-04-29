/**
 * 题目描述：
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。
 * 
 * 示例1：
 * 输入: candidates = [10,1,2,7,6,1,5], 
 * target = 8,
 * 所求解集为:
 * [
      [1, 7],
      [1, 2, 5],
      [2, 6],
      [1, 1, 6]
   ]

   示例2：
   输入: candidates = [2,5,2,1,2], target = 5,
   所求解集为:
    [
        [1,2,2],
        [5]
    ]
 */
/**
 * 方法：递归
 */

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum=function(candidates,target){
    var result=[];
    for(var i=0;i<candidates.length;i++){
        var candidate=candidates[i];
        if(candidate===candidates[i-1]) continue; //去除重复
        var left=target-candidate;
        if(left===0){
            result.push([candidate]);
        }
        else if(left>0){
            result=result.concat(combinationSum(candidates.slice(i+1),left).map(arr=>[candidate].concat(arr)));
        }
    }
    return result;
}
var combinationSum2 = function(candidates, target){
    candidates=candidates.sort((a,b)=>a-b);
    return combinationSum(candidates,target);
}
