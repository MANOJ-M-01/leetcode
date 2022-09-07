// https://leetcode.com/problems/keep-multiplying-found-values-by-two/
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */

// For Loop Version

var findFinalValue = function (nums, original) {
    let start = original;
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(start)) {
            return start;
        } else {
            start = start * 2;
        }
    }
    return start;
};

// While Loop Version

var findFinalValue = function (nums, original) {
    let start = original;
    while (nums.includes(start)) {
        start = start * 2;
    }
    return start;
};

// Short For Loop Version

var findFinalValue = function (n, o) {
    let s = o;
    for (let i = 0; i < n.length; i++) {
        if (!n.includes(s)) {
            return s;
        } else {
            s = s * 2;
        }
    }
    return s;
};

// Short While Loop Version

var findFinalValue = function (n, o) {
    let s = o;
    while (n.includes(s)) {
        s = s * 2;
    }
    return s;
};


// https://leetcode.com/problems/keep-multiplying-found-values-by-two/discuss/2358059/Easy-Javascript-oror-2-Lines-oror-Faster-than-91.33-of-JavaScript-online-submissions
var findFinalValue = function (nums, original) {
    while (nums.includes(original)) original *= 2
    return original
};

// short mine  61 ms, faster than 97.16% 

var findFinalValue = function (n, o) {
    while (n.includes(o)) o *= 2;
    return o
};

let nums = [5, 3, 6, 1, 12];
let original = 3;
nums = [2, 7, 9], original = 4
nums = [2]
original = 2;
console.log(findFinalValue(nums, original));
