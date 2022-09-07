// https://leetcode.com/problems/merge-strings-alternately/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let w1 = [...word1];
    let w2 = [...word2];
    let big = w1.length > w2.length ? w1.length : w2.length;
    let word = "";
    for (let i = 0; i < big; i++) {
        if (w1[i] != undefined) {
            word = word + w1[i]
        }
        if (w2[i] != undefined) {
            word = word + w2[i]
        }
    }
    return word;
};

var mergeAlternately = function (a, b) {
    let l = a.length > b.length ? a.length : b.length;
    let s = "";
    for (let i = 0; i < l; i++) {
        if (a[i] != undefined) s = s + a[i];
        if (b[i] != undefined) s = s + b[i];
    }
    return s;
};

/*
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr" 

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs" 

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd" 
*/
let word1 = "abc";
let word2 = "pqr";
console.log(mergeAlternately(word1, word2));