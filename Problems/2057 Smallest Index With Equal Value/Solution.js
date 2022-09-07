/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 == nums[i]) {
            return i;
        }
    }
    return -1;
};

/*
Runtime: 73 ms, faster than 92.75% of JavaScript online submissions for Smallest Index With Equal Value.
Memory Usage: 44 MB, less than 74.88% of JavaScript online submissions for Smallest Index With Equal Value.
*/
// optimized

var smallestEqual = function (n) {
    for (let i = 0; i < n.length; i++) {
        if (i % 10 == n[i]) {
            return i;
        }
    }
    return -1;
};

let nums = [0, 1, 2];
nums = [4, 3, 2, 1];
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// nums = [9, 1, 9, 8, 0, 5, 7, 8, 1, 7] //1
nums = [0, 1, 6, 4, 4, 8] //0
// nums = [7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6]; //21`
console.log(smallestEqual(nums));
