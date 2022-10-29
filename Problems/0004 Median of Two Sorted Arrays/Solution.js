// https://leetcode.com/problems/median-of-two-sorted-arrays/

/*
Runtime: 110 ms, faster than 92.44% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 48.1 MB, less than 40.44% of JavaScript online submissions for Median of Two Sorted Arrays.
Next challenges:
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);
    if (arr.length % 2 == 0) {
        return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
    } else {
        return arr[(arr.length - 1) / 2]; //give 92%
        return arr[Math.ceil(arr.length / 2) - 1];
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));