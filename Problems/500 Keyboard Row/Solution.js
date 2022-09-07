// https://leetcode.com/problems/keyboard-row/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let lib = {
        f: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        s: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        t: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    }
    res = [];
    for (let i = 0; i < words.length; i++) {
        let wrd = [];
        for (let j = 0; j < words[i].length; j++) {
            if (lib.f.includes(words[i][j])) {
                wrd.push('f');
            }
            if (lib.s.includes(words[i][j])) {
                wrd.push('s');
            }
            if (lib.t.includes(words[i][j])) {
                wrd.push('t');
            }
        }
        if (!wrd.includes('s') && !wrd.includes('t')) {
            res.push(words[i]);
        }
        if (!wrd.includes('f') && !wrd.includes('t')) {
            res.push(words[i]);
        }
        if (!wrd.includes('s') && !wrd.includes('f')) {
            res.push(words[i]);
        }
        wrd = null
    }
    lib = null;
    return res;
};

/*
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Input: words = ["omk"]
Output: []
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
*/
let words = ["Hello", "Alaska", "Dad", "Peace"];
words = ["omk"]
words = ["adsdf", "sfd"]
console.log(findWords(words));