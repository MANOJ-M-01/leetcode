/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 == s2) return true;
    let d = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            d.push(i);
        }
    }
    if (d.length > 2 || d.length == 1) return false;
    return s1[d[0]] == s2[d[1]] && s1[d[1]] == s2[d[0]];
};