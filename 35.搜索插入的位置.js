/**
 * 题目描述：
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 示例1：
 * 输入: [1,3,5,6], 5
    输出: 2

    示例2：
    输入: [1,3,5,6], 2
    输出: 1

    示例3：
    输入: [1,3,5,6], 7
    输出: 4

    示例4：
    输入: [1,3,5,6], 0
    输出: 0
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }
        if(nums[i]<target && nums[i+1]>target){
            return i+1;
        }
        if(nums[nums.length-1]<target){
            return nums.length;
        }
        if(nums[i]>target){
            return i;
        }
    }
};