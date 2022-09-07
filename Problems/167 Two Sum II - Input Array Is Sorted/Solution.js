// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/*
Runtime: 78 ms, faster than 77.47% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43.1 MB, less than 34.32% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
*/

var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    while (r > l) {
        let sum = numbers[l] + numbers[r];
        if (sum == target) return [l + 1, r + 1];
        if (sum < target) l += 1;
        if (sum > target) r -= 1
    }
};


/*
55 %
Memory usage 34%
*/
var twoSum = function (numbers, target) {
    let hash = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (hash.has(numbers[i])) return [hash.get(numbers[i]) + 1, i + 1];
        hash.set(target - numbers[i], i);
    }
};
