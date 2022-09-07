// https://leetcode.com/problems/longest-palindrome/submissions/
// https://leetcode.com/problems/longest-palindrome/discuss/391018/JavaScript-solution-with-a-single-for-loop
/*
Runtime: 68 ms, faster than 96.05% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 44.2 MB, less than 48.49% of JavaScript online submissions for Longest Palindrome.
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    if (s.length == 1) return 1;
    let ans = 0;
    let keys = {};
    for (let char of s) {
        keys[char] = (keys[char] || 0) + 1;
        if (keys[char] % 2 == 0) ans += 2;
    }
    return s.length > ans ? ans + 1 : ans;
};

console.log(longestPalindrome("abccccdd")); // 7

console.log(longestPalindrome("a")); // 1