// https://leetcode.com/problems/max-consecutive-ones/
// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count += 1;
            arr.push(count);
        } else {
            count = 0;
            arr.push(count);
        }
    }
    arr.sort((a, b) => b - a);
    return arr[0];
};

let nums = [1, 1, 0, 1, 1, 1] //3
nums = [1, 0, 1, 1, 0, 1] //2
nums = [0]
// nums=[0,0]
console.log(findMaxConsecutiveOnes(nums));