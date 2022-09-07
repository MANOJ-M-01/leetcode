// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (n, k) {
    let c = 0;
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if ((n[i] == n[j]) && ((i * j) % k == 0)) {
                c += 1;
            }
        }
    }
    return c;
};

let nums = [3, 1, 2, 2, 2, 1, 3];
let k = 2;
nums = [1, 2, 3, 4], k = 1 //0
nums = [5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3];
k = 7 //18

// custom test case
nums = [3, 5, 6, 3];
k = 3;

// custom test case 2
nums = [4, 6, 2];
k = 4;

// custom test case 2

num = [2, 6, 7, 2, 6];
k = 2;

// custom test case 3

num = [4, 6, 4];
k = 3



console.log(countPairs(nums, k));