// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let len = 0;
    for (let i = 0; i < sentences.length; i++) {
        let arr = sentences[i].split(" ");
        if (arr.length >= len) len = arr.length;
    }
    return len;
};
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
sentences = ["please wait", "continue to fight", "continue to win"]
console.log(mostWordsFound(sentences));


// optimized
/*
Runtime: 74 ms, faster than 84.03% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
Memory Usage: 44.2 MB, less than 55.90% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
*/
var mostWordsFound = function (s) {
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = s[i].split(" ");
        if (arr.length >= len) len = arr.length;
    }
    return len;
};