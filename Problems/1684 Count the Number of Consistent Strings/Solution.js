// https://leetcode.com/problems/count-the-number-of-consistent-strings/
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let a = [...allowed];
    let res = 0;
    for (let i = 0; i < words.length; i++) {
        let word = [...words[i]];
        let existLength = 0;
        for (let j = 0; j <= word.length; j++) {
            if (a.includes(word[j])) {
                existLength += 1;
            }
        }
        if (word.length == existLength) {
            res += 1;
        }
    }
    return res;
};



/*
Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/

let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"]; //2

// allowed = "abc"
// words = ["a", "b", "c", "ab", "ac", "bc", "abc"]; //7

// allowed = "cad";
// words = ["cc","acd","b","ba","bac","bad","ac","d"]; //3

console.log(countConsistentStrings(allowed, words));