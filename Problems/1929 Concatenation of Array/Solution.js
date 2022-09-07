// https://leetcode.com/problems/concatenation-of-array/

/*
Runtime: 84 ms, faster than 91.09% of JavaScript online submissions for Concatenation of Array.
Memory Usage: 45.6 MB, less than 47.52% of JavaScript online submissions for Concatenation of Array.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (n) {
    return [...n, ...n];
};

let nums = [1, 2, 1];
nums = [1, 3, 2, 1];

console.log(getConcatenation(nums));