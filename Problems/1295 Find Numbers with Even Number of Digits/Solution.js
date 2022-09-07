// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] + "").length % 2 == 0) {
            count += 1;
        }
    }
    return count;
};

let nums = [12, 345, 2, 6, 7896];
nums = [555, 901, 482, 1771]
console.log(findNumbers(nums));