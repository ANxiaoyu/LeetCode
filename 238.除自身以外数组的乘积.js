/**
 * 题目：
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 
 * 示例:
 * 输入: [1,2,3,4]
 * 输出: [24,12,8,6]
 * 
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */

 /**方法：递归与分治法 */
 /**基本思路：
  * 将数组分成两个部分，左半部分的元素依次乘上右半部分所有元素之积，以此类推，右半部分的元素依次乘上左半部分所有元素之积，即得到答案。 */
 /**分治法的使用： 
  * 将数组不断对半划分，直到单个元素，然后再两两进行上述基本思路的操作，最终得到答案*/
 
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(nums.length==0) return nums;
     let res=new Array(nums.length);
     res.fill(1);
     
     let merge = (num1, num2, l, r, mid)=>{  //左右两个部分的数组相互作积，并返回当前区域数组的积
         for(let i=l;i<=mid;i++){
             res[i]=res[i]*num2;
         }
         for(let j=mid+1;j<=r;j++){
             res[j]=res[j]*num1;
         }
         return num1*num2;
     }
     
     let partation=(l,r)=>{  //划分数组，返回当前区域数组的积
         if(l==r){
             return nums[l];
         }
         let mid=Math.floor((l+r)/2);
         return merge(partation(l,mid), partation(mid+1,r), l, r, mid); //递归调用划分函数
         
     }
     partation(0,nums.length-1);
     return res;
 };
