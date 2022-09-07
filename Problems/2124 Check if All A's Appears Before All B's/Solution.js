// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

/**
 * @param {string} s
 * @return {boolean}
 */

var checkString = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.length >= i + 1) {
            if (s[i] == "a" && !s[i + 1] == "b") {
                return false;
            }
            if (s[i] == "b" && s[i + 1] == "a") {
                return false;
            }
        }
    }
    return true;
};


let s = "aaab";

console.log(checkString(s));

// optimized
/*
Runtime: 65 ms, faster than 92.88% of JavaScript online submissions for Check if All A's Appears Before All B's.
Memory Usage: 42.3 MB, less than 26.94% of JavaScript online submissions for Check if All A's Appears Before All B's.
*/
var checkString = function (s) {
    for (let i = 0; i < s.length; i++) {
        if ((s.length >= i + 1) && ((s[i] == "a" && !s[i + 1] == "b") || (s[i] == "b" && s[i + 1] == "a"))) return false;
    }
    return true;
};