/**
 * 题目描述：
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 * 
 * 示例1：
 * 输入: candidates = [2,3,6,7], target = 7,
    所求解集为:
    [
       [7],
       [2,2,3]
    ]

    示例2：
    输入: candidates = [2,3,5], target = 8,
    所求解集为:
    [
      [2,2,2,2],
      [2,3,3],
      [3,5]
    ]
 */

 /**
  * 方法：递归以及深拷贝
  */


 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var listAll=new Array();
    var list=new Array();
    //排序
    candidates.sort((a,b)=>a-b);
    helper(listAll,list,candidates,target,0);
    return listAll;
};
function helper(listAll,tmp,candidates,target,num){
    //递归的终点
    if(target==0){
        listAll.push(tmp);
        return;
    }
    if(target<candidates[num])return;
    for(var i=num;i<candidates.length&&candidates[i]<=target;i++){
        //深拷贝
        list=new Array(tmp);
        list.push(candidates[i]);
        //递归运算，将i传递至下一次运算是为了避免结果重复
        helper(listAll,list,candidates,target-candidates[i],i);
    }
}