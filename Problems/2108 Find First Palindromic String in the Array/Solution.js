// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */


// discussion answer
var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let revword = "";
        for (let j = word.length - 1; j >= 0; j--) {
            revword = revword + word[j];
        }
        if (word == revword) return word;
    }
    return "";
};

// 32%
var rev = (s) => {
    a = "";
    for (let i = s.length - 1; i >= 0; i--) {
        a = a + s[i];
    }
    return a;
}
var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] == rev(words[i])) return words[i];
    }
    return "";
};


// optimized 67 %
var rev = (s) => {
    a = "";
    for (let i = s.length - 1; i >= 0; i--) {
        a = a + s[i];
    }
    return a;
}

var firstPalindrome = function (w) {
    for (let i = 0; i < w.length; i++) {
        if (w[i] == rev(w[i])) return w[i];
    }
    return "";
};

/*
Runtime: 101 ms, faster than 85.25% of JavaScript online submissions for Find First Palindromic String in the Array.
Memory Usage: 50.4 MB, less than 28.24% of JavaScript online submissions for Find First Palindromic String in the Array.
*/

var firstPalindrome = function (w) {
    for (let i = 0; i < w.length; i++) {
        let r = "";
        for (let j = w[i].length - 1; j >= 0; j--) {
            r = r + w[i][j];
        }
        if (w[i] == r) return w[i];
    }
    return "";
};

let words = ["abc", "car", "ada", "racecar", "cool"];
words = ["notapalindrome", "racecar"];
words = ["def", "ghi"];

console.log(firstPalindrome(words));