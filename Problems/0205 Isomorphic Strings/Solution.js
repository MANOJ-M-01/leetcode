// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// both functions are working

var isIsomorphic = function (s, t) {
    const tbl = {}, trkr = {}
    for (let i = 0; i < is.length; i++) {
        if (!(s[i] in tbl) && !(t[i] in trkr)) {
            tbl[s[i]] = t[i]
            trkr[t[i]] = s[i]
        } else {
            if (tbl[s[i]] !== t[i]) return false;
        }
    }
    return true
};

// 76%
// 26 line removal get 96%
var isIsomorphic2 = function (s, t) {
    let a = {};
    let b = {};
    if (s.length != t.length) return false;
    for (i = 0; i < s.length; i++) {
        if (!(s[i] in a) && !(t[i] in b)) {
            a[s[i]] = t[i];
            b[t[i]] = s[i];
        } else {
            if (a[s[i]] != t[i]) return false;
        }
    }
    return true;
};

let s = "egg";
let t = "add";

console.log(isIsomorphic(s, t));
