// https://leetcode.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let arr = [...s];
    let j = s.length;
    for (let i = 0; i < s.length; i++) {
        j--;
        s[i] = arr[j]
    }
};

let s = ["h", "e", "l", "l", "o"]


console.log(reverseString(s))

console.log(s);