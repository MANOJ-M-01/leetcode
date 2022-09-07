// https://leetcode.com/problems/truncate-sentence/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let arr = s.split(' ');
    if ((arr.length) < k) return s;
    let word = "";
    for (let i = 0; i < k; i++) {
        word = word + " " + arr[i];
    }
    word = word.substring(1, word.length)
    return word;
};

/*
Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution" 

Input: s = "chopper is not a tanuki", k = 5
Output: "chopper is not a tanuki"

*/
let s = "What is the solution to this problem";
let k = 4;
// s = "chopper is not a tanuki";
// k = 5
console.log(truncateSentence(s, k));