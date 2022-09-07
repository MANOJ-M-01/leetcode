// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
    let arr = [...s];
    let ar = [];
    let input = t;
    for (let i = 0; i < arr.length; i++) {
        let index = input.search(arr[i]);
        input = input.substring(index + 1, input.length);
        if (index < 0) {
            return false;
        }
        ar = [...ar, index]
    }
    return true
};

/*
Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
*/
let s = "abc";
let t = "ahbgdc";

// s = "aaaaaa";
// t = "bbaaaa"; //false

// s = "ab";
// t = "baab"; //true

// s = "bb";
// t = "ahbgdc"; //false
console.log(isSubsequence(s, t))



//old 

/*
not correct for
// s = "ab";
// t = "baab";
 
function isAscending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x >= arr[i - 1];
    });
}
var isSubsequence = function (s, t) {
    let arr = [...s];
    let ar = [];
    let failed = false;
    arr.forEach(a => {
        let index = t.search(a);
        if (index < 0) {
            failed = true;
            return false;
        }
        if (index >= 0) {
            if (ar.includes(index)) {
                failed = true;
                return false;
            }
            ar = [...ar, index]
        }
    });
    if (failed) {
        return false;
    }
    if (isAscending(ar)) {
        return true;
    }
    return false
};

*/