// https://leetcode.com/problems/count-asterisks/
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let exist = false;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] == '|' ? exist = !exist : s[i] == '*' && !exist ? res += 1 : '';
    }
    return res
};