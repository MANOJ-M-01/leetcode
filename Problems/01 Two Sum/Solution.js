// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]


var twoSums = function (nums, target) {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]] != undefined && hashmap[nums[i]].key == nums[i]) {
            return [...hashmap[nums[i]].val, i]
        }
        let s = target - nums[i];
        hashmap[s] = { key: s, val: [i] };
    }
    return -1;
}


/*
Runtime: 78 ms, faster than 90.04% of JavaScript online submissions for Two Sum.
Memory Usage: 43.4 MB, less than 25.42% of JavaScript online submissions for Two Sum.
*/
// using map
var twoSum = function (nums, target) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) return [hash.get(nums[i]), i];
        hash.set(target - nums[i], i);
    }
};


console.log(twoSum([2, 7, 11, 15], 9)); //  [0,1]
console.log(twoSum([3, 2, 4], 6)); //  [1,2]
console.log(twoSum([3, 3], 6)); //  [0,1]