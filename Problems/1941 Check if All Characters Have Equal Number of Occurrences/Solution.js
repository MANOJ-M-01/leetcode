// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences
// Slow
/*
Runtime: 535 ms, faster than 5.19% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.
Memory Usage: 48.7 MB, less than 5.19% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let reg = new RegExp(s[i], 'g');
        let len = (s.match(reg) || []).length;
        if (i == 0) {
            count = len;
        }
        if (count != len) {
            return false;
        } else {
            count = len;
        }
    }
    return true;
};


let s = "abacbc";
s = "aaabb";
console.log(areOccurrencesEqual(s));