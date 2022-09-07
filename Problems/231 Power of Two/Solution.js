// https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    for (let i = 0; i < n; i++) {
        let sd = Math.pow(2, i);
        if ((Math.pow(2, i)) == Infinity) return false;
        if (sd == n) {
            return true;
        }
    }
    return false;
};

// https://nodejs.org/api/process.html#process_process
// var memoryInfo = window.performance.memory;
// console.log(performance.memory)
/*
Input: n = 1
Output: true
Explanation: 20 = 1
Input: n = 16
Output: true
Explanation: 24 = 16
Input: n = 3
Output: false
67108863
*/
console.log(isPowerOfTwo(1024))