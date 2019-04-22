/**
 * 题目描述:
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，
 * 判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？
 * 找出所有满足条件且不重复的四元组。
 * 
 * 注意:
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
    [
        [-1,  0, 0, 1],
        [-2, -1, 1, 2],
        [-2,  0, 0, 2]
    ]
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum=function(nums,target){
    var res=new Array();
    //排序
    nums.sort((a,b)=>a-b);

    for(var i=0;i<nums.length-3;i++){
        //去重
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }

        for(var j=i+1;j<nums.length-2;j++){
            //去重
            if(j>0 && nums[j]==nums[j-1]){
                continue;
            }

            //对撞指针
            var l=j+1,r=nums.length-1;
            var temp=target-nums[i]-nums[j];

            while(l<r){
                if(nums[l]+nums[r]==temp){
                    var newNums=new Array(nums[i],nums[j],nums[l],nums[r]);
                    res.push(newNums);
                    while(l<r && nums[l]==nums[l+1]){
                        l++;
                    }
                    while(l<r && nums[r]==nums[r-1]){
                        r--;
                    }
                    l++;
                    r--;
                }
                else if(nums[l]+nums[r]>temp){
                    r--;
                }else{
                    l++;
                }
            }
        }
    }
    return res;
}

