// https://leetcode.com/problems/roman-to-integer

/*
    28%
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let char = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1, };
    let n = 0;
    for (let i = 0; i < s.length; i++) {
        let two = s[i] + s[i + 1];
        if (char[two] != undefined) {
            n += char[two];
            i++;
        } else {
            n += char[s[i]];
        }
    }
    return n;
};

let s = "III";
s = "LVIII";
s = "MCMXCIV";

console.log(romanToInt(s));


// optimized
/*
Runtime: 133 ms, faster than 92.87% of JavaScript online submissions for Roman to Integer.
Memory Usage: 47.5 MB, less than 47.50% of JavaScript online submissions for Roman to Integer.

*/
var romanToInt = function (s) {
    let char = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1, };
    let n = 0;
    for (let i = 0; i < s.length; i++) {
        if (char[s[i] + s[i + 1]] != undefined) {
            n += char[s[i] + s[i + 1]];
            i++;
        } else {
            n += char[s[i]];
        }
    }
    return n;
};