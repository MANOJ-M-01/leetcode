// https://leetcode.com/problems/sort-characters-by-frequency/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let arr = {};
    for (let i = 0; i < s.length; i++) {
        if (arr[s[i]] != undefined) {
            arr[s[i]] = arr[s[i]] + 1
        } else {
            arr[s[i]] = 1
        }

    }
    let array = Object.entries(arr).sort(function (a, b) {
        return a[1] - b[1]
    }).reverse()
    let words = "";
    array.map(e => {
        let word = "";
        for (let i = 0; i < e[1]; i++) {
            word = word + e[0]
        }
        words = words + word
    })
    return words
};

/*
Input: s = "tree"
Output: "eert"
Input: s = "cccaaa"
Output: "aaaccc"
*/

let s = "tree"
s = "raaeaedere";

console.log(frequencySort(s));