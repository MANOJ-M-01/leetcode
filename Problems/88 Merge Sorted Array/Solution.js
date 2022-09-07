//https://leetcode.com/problems/merge-sorted-array

// https://stackoverflow.com/questions/30640771/i-want-to-replace-all-values-with-another-array-values-both-arrays-are-in-same

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
using for will give 62% 
Runtime: 84 ms, faster than 62.75% o
*/

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
// [1,2,2,3,5,6]

// nums1 = [1], m = 1, nums2 = [], n = 0 //  [1]
nums1 = [0], m = 0, nums2 = [1], n = 1 //  [1]

var merge = function (nums1, m, nums2, n) {
    n1 = nums1.slice(0, m);
    n2 = nums2.slice(0, n);
    n3 = n1.concat(n2)
    n3.sort((a, b) => a - b);

    // 62 % speed
    // for (let i = 0; i < n3.length; i++) {
    //     nums1[i] = n3[i];
    // }
    // (or)

    // 20% speed
    nums1.length = 0;
    nums1.push(...n3);
};


console.log(merge(nums1, m, nums2, n));

console.log(nums1);


//  https://leetcode.com/problems/merge-sorted-array/discuss/2397118/Javascript-simple-fast-using-push-and-spread-solution
/*
Runtime: 74 ms, faster than 78.37% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 42.4 MB, less than 19.92% of JavaScript online submissions for Merge Sorted Array.
Next challenges:
*/

var merge = function (nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};