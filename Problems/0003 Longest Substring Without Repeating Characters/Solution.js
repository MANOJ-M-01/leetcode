var lengthOfLongestSubstring = function (s) {
    const set = new Map();
    let start = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) start = Math.max(set.get(s[i]) + 1, start)
        set.set(s[i], i);
        max = Math.max(i - start + 1, max);
    }
    return max;
};