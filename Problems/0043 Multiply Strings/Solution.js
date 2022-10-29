// https://leetcode.com/problems/multiply-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    return (BigInt(num1) * BigInt(num2)).toString();
};

//optimized
/*
Runtime: 100 ms, faster than 72.78% of JavaScript online submissions for Multiply Strings.
Memory Usage: 41.6 MB, less than 99.76% of JavaScript online submissions for Multiply Strings.
*/

var multiply = function (n, m) {
    return (BigInt(n) * BigInt(m)).toString();
};


