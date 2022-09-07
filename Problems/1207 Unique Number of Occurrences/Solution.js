// https://leetcode.com/problems/unique-number-of-occurrences/
var uniqueOccurrences = function (arr) {
    let f = {}; checker = [];
    for (const x of arr) {
        f[x] = (f[x] || 0) + 1;
    }
    for (const k in f) {
        if (checker.includes(f[k])) {
            return false;
        } else {
            checker.push(f[k]);
        }
    }
    return true;
};