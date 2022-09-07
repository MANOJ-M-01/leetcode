// https://leetcode.com/problems/reverse-prefix-of-word/
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

var reversePrefix = function (word, ch) {
    let w = word.match(ch)
    if (!w) return word;
    let p = reverseString(word.substring(0, w.index + 1))
    let s = word.substring(w.index + 1)
    return p + s
};

/*
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Input: word = "abcd", ch = "z"
Output: "abcd" 
*/
let word = "abcdefd", ch = "d";
word = "xyxzxe", ch = "z"
word = "abcd", ch = "z"
console.log(reversePrefix(word, ch))



/*
Runtime: 55 ms, faster than 97.32% of JavaScript online submissions for Reverse Prefix of Word.
Memory Usage: 42.3 MB, less than 28.43% of JavaScript online submissions for Reverse Prefix of Word.
*/