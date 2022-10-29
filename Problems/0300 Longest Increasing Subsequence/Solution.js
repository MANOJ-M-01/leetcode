// https://leetcode.com/problems/longest-increasing-subsequence

var lengthOfLIS = function (n) {
    let a = Array(n.length).fill(1);
    for (let i = 1; i < n.length; i++) {
        for (let j = 0; j < i; j++) {
            if (n[i] > n[j] && (a[j] + 1) > a[i]) {
                a[i] = a[j] + 1;
            }
        }
    }
    return Math.max(...a);
};