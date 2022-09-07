// https://leetcode.com/problems/shuffle-string/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let arr = [];
    let obj = {};
    for (i = 0; i < s.length; i++) {
        obj[indices[i]] = s[i];
    }
    for (i = 0; i < s.length; i++) {
        arr = [...arr, obj[i]];
    }
    return arr.toString().replaceAll(",", "");
};

/*
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
*/
let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));