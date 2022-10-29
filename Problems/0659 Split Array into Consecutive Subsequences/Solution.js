// https://leetcode.com/problems/split-array-into-consecutive-subsequences/

// https://leetcode.com/problems/split-array-into-consecutive-subsequences/discuss/2447421/Javascript-solution-using-hashmap

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible1 = function (nums) {
    if (nums.length < 3) return false;
    let a = [];
    let last = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!a.includes(nums[i])) {
            if (a.length == 3) {
                break;
            }
            last = i;
            a.push(nums[i]);
        }
    }
    if (nums.length == 3 && a.length == 3) return true;
    let b = [];
    for (let i = nums.length - 1; i > 0; i--) {
        if (a.length == 3 && b.length == 3) {
            return true;
        }
        if (last == i) {
            return false;
        }
        if (!b.includes(nums[i])) {
            if (b.length == 3) {
                break;
            }
            b.push(nums[i]);
        }
    }
};


//  reference
var isPossible = function (nums) {
    let fMap = {};
    let aMap = {};
    for (let i = 0; i < nums.length; i++) {
        fMap[nums[i]] = (fMap[nums[i]] || 0) + 1;
    }
    for (let i of nums) {
        if (fMap[i] == 0) continue;
        else if (aMap[i] > 0) {
            aMap[i] = (aMap[i] || 0) - 1;
            aMap[i + 1] = (aMap[i + 1] || 0) + 1;
        } else if (fMap[i + 1] && fMap[i + 2]) {
            fMap[i + 1] = (fMap[i + 1] || 0) - 1;
            fMap[i + 2] = (fMap[i + 2] || 0) - 1;
            aMap[i + 3] = (aMap[i + 3] || 0) + 1;
        }
        else {
            return false;
        }
        fMap[i] -= 1;
    }
    return true;
};

// optimized
/*
Runtime: 142 ms, faster than 53.75% of JavaScript online submissions for Split Array into Consecutive Subsequences.
Memory Usage: 51.2 MB, less than 40.00% of JavaScript online submissions for Split Array into Consecutive Subsequences.
*/
var isPossible = function (n) {
    let a = {};
    let b = {};
    for (let i = 0; i < n.length; i++) {
        a[n[i]] = (a[n[i]] || 0) + 1;
    }
    for (let i of n) {
        if (a[i] == 0) continue;
        else if (b[i] > 0) {
            b[i] = (b[i] || 0) - 1;
            b[i + 1] = (b[i + 1] || 0) + 1;
        } else if (a[i + 1] && a[i + 2]) {
            a[i + 1] = (a[i + 1] || 0) - 1;
            a[i + 2] = (a[i + 2] || 0) - 1;
            b[i + 3] = (b[i + 3] || 0) + 1;
        }
        else {
            return false;
        }
        a[i] -= 1;
    }
    return true;
};


let nums = [1, 2, 3, 3, 4, 5]; //true
// nums = [1, 2, 3, 3, 4, 4, 5, 5] // true
// nums = [1, 2, 3, 4, 4, 5] // false
nums = [1, 2, 3, 4]; //true
nums = [1] //false
nums = [1, 2, 3, 5, 5, 6, 7] //false
console.log(isPossible(nums));
