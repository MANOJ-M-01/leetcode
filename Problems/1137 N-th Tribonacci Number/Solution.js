// https://leetcode.com/problems/n-th-tribonacci-number/
var tribonacci = function (n) {
    let r = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        r[i] = r[i - 1] + r[i - 2] + r[i - 3];
    }
    return r[n];
};