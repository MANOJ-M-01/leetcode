// https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // let arr = [];
    let res = "";
    let l = 0;
    for (let i = 0; i < s.length; i = i + k) {
        let word = s.slice(i, i + k);
        // arr.push(word);
        if (l % 2 == 0) {
            for (j = word.length - 1; j >= 0; j--) {
                res += word[j];
            }
        } else {
            res += word;
        }
        l++;
    }
    return res;
};

let s = "abcdefgfhi";
let k = 2;
// s = "abcd", k = 2
console.log(reverseStr(s, k));