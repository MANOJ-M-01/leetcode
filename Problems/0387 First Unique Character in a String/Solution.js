// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
    for (let i = 0, n = s.length; i < n; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i]))
            return i;
    }
    return -1;
};