// https://leetcode.com/problems/rearrange-characters-to-make-target-string/
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */

// Correct  

// var rearrangeCharacters = function (s, target) {
//     let freq = (str) => str.split(``).reduce((c, a) => (c[a] = (c[a] ?? 0) + 1, c), {});                                           
//     let targetFreq = freq(target);
//     let sFreq = freq(s);
//     const max = Object.keys(targetFreq).reduce((min, key) => Math.min(Math.floor(sFreq[key] / targetFreq[key]), min), Infinity);
//     return isNaN(max) ? 0 : max;
// };


// Correct My

var rearrangeCharacters = function (s, target) {
    for (let i = 0; i < target.length; i++) {
        if (!s.includes(target[i])) {
            return 0;
        }
    }
    let arr = s.split('');
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (target.includes(arr[i])) {
            obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1;
        }
    }
    let t = target.split('');
    let done = false;
    let count = 0;
    while (!done) {
        count++;
        for (i = 0; i < t.length; i++) {
            if (obj[t[i]] == 0) {
                done = true;
                break;
            }
            if (obj[t[i]]) {
                obj[t[i]] -= 1;
            }
        }
    }
    return count - 1;
}

let s = "ilovecodingonleetcode";
let target = "code";
// s = "abcba";
// target = "abc";
// s = "abbaccaddaeea";
// target = "aaaaa";

// s = "abc";
// target = "abcd";  // 0
// s ="abbaccaddaeea";
// target = "aaaaa";
console.log(rearrangeCharacters(s, target));