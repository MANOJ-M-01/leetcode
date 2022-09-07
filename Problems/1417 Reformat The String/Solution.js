// https://leetcode.com/problems/reformat-the-string/
/**
 * @param {string} s
 * @return {string}
 */
function isANumber(n) {
    var numStr = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;
    return numStr.test(n.toString());
}
var reformat = function (s) {
    let arr = [...s];
    let num = [];
    let str = [];
    for (let i = 0; i < arr.length; i++) {
        if (isANumber(arr[i])) {
            num = [...num, arr[i]]
        } else {
            str = [...str, arr[i]]
        }
    }
    if (num.length != str.length && num.length + 1 != str.length && num.length != str.length + 1) {
        return ""
    }
    let res = "";
    let res2 = "";
    let big = num.length > str.length ? num.length : str.length;
    for (let j = 0; j < big; j++) {
        if (str[j] != undefined) {
            res = res + str[j]
            if (num[j] != undefined) {
                res = res + num[j]
            }
        }
        if (num[j] != undefined) {
            res2 = res2 + num[j]
            if (str[j] != undefined) {
                res2 = res2 + str[j]
            }
        }
    }
    if (s.length == res.length) {
        return res
    }
    if (s.length == res2.length) {
        return res2
    }
    return ""
};

/*
Input: s = "a0b1c2"
Output: "0a1b2c"

Input: s = "leetcode"
Output: ""

Input: s = "1229857369"
Output: ""

"covid2019"

"c2o0v1i9d"

Input
"ab123"
Output
"a1b23"
*/

let s = "a0b1c2";
console.log(reformat(s));