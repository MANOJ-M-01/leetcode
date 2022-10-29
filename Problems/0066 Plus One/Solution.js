// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1);
    return digits
};


/*
Input: digits = [1,2,3]
Output: [1,2,4]
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Input: digits = [9]
Output: [1,0]
*/

let digits = [1, 2, 3]
digits = [4, 3, 2, 1]
// digits = [9]

console.log(plusOne(digits));
