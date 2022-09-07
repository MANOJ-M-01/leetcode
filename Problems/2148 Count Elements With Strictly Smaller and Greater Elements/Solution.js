// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let icount = 0;
        let dcount = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i != j && nums[i] > nums[j]) {
                icount += 1;
            }
            if (i != j && nums[i] < nums[j]) {
                dcount += 1;
            }
        }
        if (icount >= 1 && dcount >= 1) {
            count += 1;
        }
    }
    return count;
};
let nums = [11, 7, 2, 15];
// nums = [-3, 3, 3, 90];
// nums = [3]
console.log(countElements(nums));

// optimized 
/*
Runtime: 69 ms, faster than 90.85% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
Memory Usage: 42.2 MB, less than 59.86% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
*/
var countElements = function (n) {
    let c = 0;
    for (let i = 0; i < n.length; i++) {
        let h = 0;
        let l = 0;
        for (let j = 0; j < n.length; j++) {
            if (i != j && n[i] > n[j]) {
                h += 1;
            }
            if (i != j && n[i] < n[j]) {
                l += 1;
            }
        }
        if (h >= 1 && l >= 1) {
            c += 1;
        }
    }
    return c;
};


// small sol ref (not used)
/*
// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/discuss/2162825/Javascript-One-line
var countElements = (nums) =>
  nums
    .sort((a, b) => a - b)
    .filter((x, _, arr) => x > arr[0] && x < arr[arr.length - 1]).length;

// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/discuss/2175885/JavaScript-or-Beats-91-Speed-100-Memory-or-One-Liner
var countElements = (nums) => nums.sort((a, b) => b - a).reduce((count, ele, _, arr) => ele !== arr.at(0) && ele !== arr.at(-1) ? ++count : count, 0);

*/