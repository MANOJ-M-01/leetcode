// https://leetcode.com/problems/remove-element/
// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};


nums = [3, 2, 2, 3], val = 3

console.log(removeElement(nums, val));

// optimized
/*
Runtime: 82 ms, faster than 65.62% of JavaScript online submissions for Remove Element.
Memory Usage: 42 MB, less than 70.60% of JavaScript online submissions for Remove Element.
*/
var removeElement = function (n, v) {
    let i = 0;
    for (let j = 0; j < n.length; j++) {
        if (n[j] != v) {
            n[i] = n[j];
            i++;
        }
    }
    return i;
};
