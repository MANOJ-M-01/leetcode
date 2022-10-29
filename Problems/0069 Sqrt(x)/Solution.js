// https://leetcode.com/problems/sqrtx/

/*
Runtime: 101 ms, faster than 72.61% of JavaScript online submissions for Sqrt(x).
Memory Usage: 43.6 MB, less than 68.12% of JavaScript online submissions for Sqrt(x).
*/
/**
 * @param {number} x
 * @return {number}
 */

// Math.floor and parseInt both are correct
var mySqrt = function (x) {
    return parseInt(Math.sqrt(x));
    // return Math.floor(Math.sqrt(x));
};