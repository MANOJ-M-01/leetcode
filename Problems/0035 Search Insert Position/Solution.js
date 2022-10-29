// https://leetcode.com/problems/search-insert-position/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            break;
        } else {
            if (i == 0 && target < nums[i]) {
                return i;
            }
            if (nums[i] <= target && nums[i + 1] >= target) {
                i = i + 1
                return i;
            }
        }
    }
    return i;
};
/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

*/
let nums = [1, 3, 5, 6];
let target = 0;
console.log(searchInsert(nums, target));