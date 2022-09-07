// https://leetcode.com/problems/counting-words-with-a-given-prefix/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

// optimized;

var prefixCount = function (w, p) {
    let c = 0;
    for (let i = 0; i < w.length; i++) {
        if (w[i].length >= p.length) {
            if (w[i].slice(0, p.length) == p) {
                c += 1;
            }
        }
    }
    return c;
};



let words = ["pay", "attention", "practice", "attend"];
let pref = "at";
// words = ["leetcode", "win", "loops", "success"];
// pref = "code";

words = ["sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "vbx", "fsi", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "gqira", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh"];
pref = "sxyjellhlh";
console.log(prefixCount(words, pref));

/*
// working but not optimized
var prefixCount = function (words, pref) {
    let len = pref.length;
    let count = 0;
    for (i = 0; i < words.length; i++) {
        if (words[i].length >= len) { 
        let pre = words[i].slice(0, len);
            if (pre == pref) {
                count += 1;
            }
        }
    }
    return count;
};
*/