// https://leetcode.com/problems/percentage-of-letter-in-string/
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    let existLen = (s.match(new RegExp(letter, "g")) || []).length
    return parseInt((existLen / s.length) * 100)
};

/*
Input: s = "foobar", letter = "o"
Output: 33
Input: s = "jjjj", letter = "k"
Output: 0
*/
let s = "foobar";
let letter = "o";
s = "jjjj";
letter = "k"
console.log(percentageLetter(s, letter));
