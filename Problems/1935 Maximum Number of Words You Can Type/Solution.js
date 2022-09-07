// https://leetcode.com/problems/maximum-number-of-words-you-can-type/
// slow

/*
Runtime: 133 ms, faster than 12.33% of JavaScript online submissions for Maximum Number of Words You Can Type.
Memory Usage: 44 MB, less than 35.62% of JavaScript online submissions for Maximum Number of Words You Can Type.
*/
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let br = brokenLetters.split('');
    let arr = text.split(' ');
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i].split('');
        let count = 0;
        for (let j = 0; j < a.length; j++) {
            if (br.includes(a[j])) {
                break;
            } else {
                count += 1;
            }
        }
        if (a.length == count) {
            res += 1;
        }
    }
    return res;
};

let text = "hello world";
let brokenLetters = "ad";

text = "leet code", brokenLetters = "lt"
text = "leet code", brokenLetters = "e"

console.log(canBeTypedWords(text, brokenLetters));