// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    let len = 0;
    for (let i = 0; i < num.length; i++) {
        len = num.split(i).length - 1
        if (num[i] != len) return false;
    }
    return true
};

/*
Input: num = "1210"
Output: true
Input: num = "030"
Output: false
*/

let num = "1210"
num = "030"
console.log(digitCount(num));