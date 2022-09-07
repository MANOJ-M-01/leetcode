// https://leetcode.com/problems/squares-of-a-sorted-array/
// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i] * nums[i]);
    }
    arr.sort((a, b) => a - b);
    return arr;
};

let nums = [-4, -1, 0, 3, 10];  // [0,1,9,16,100]
nums = [-7, -3, 2, 3, 11]; // [4,9,9,49,121]

console.log(sortedSquares(nums));