// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
/*
Runtime: 72 ms, faster than 90.61% of JavaScript online submissions for Sum of Digits of String After Convert.
Memory Usage: 42.9 MB, less than 92.82% of JavaScript online submissions for Sum of Digits of String After Convert.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let alpha = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
var getLucky3 = function (s, k) {
    let num = "";
    for (let i = 0; i < s.length; i++) {
        num += alpha[s[i]];
    }
    let end = 0;
    while (end != k) {
        let temp = 0;
        for (let i = 0; i < num.length; i++) {
            temp += parseInt(num[i]);
        }
        num = temp + "";
        end += 1;
    }
    return parseInt(num);
};
/*
Runtime: 73 ms, faster than 90.61% of JavaScript online submissions for Sum of Digits of String After Convert.
Memory Usage: 43.5 MB, less than 82.87% of JavaScript online submissions for Sum of Digits of String After Convert.
*/

var getLucky = function (s, k) {
    let num = "";
    for (let i = 0; i < s.length; i++) {
        num += s.charCodeAt(i) - 96;
    }
    let end = 0;
    while (end != k) {
        let temp = 0;
        for (let i = 0; i < num.length; i++) {
            temp += parseInt(num[i]);
        }
        num = temp + "";
        end += 1;
    }
    return parseInt(num);
};

console.log(getLucky("iiii", 1)); //36
console.log(getLucky("leetcode", 2)); //6
console.log(getLucky("zbax", 2)); //8
console.log(getLucky("hvmhoasabaymnmsd", 1)); //79
