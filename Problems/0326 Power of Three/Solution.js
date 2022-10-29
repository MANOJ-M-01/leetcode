// https://leetcode.com/problems/power-of-three/

// other methods
// https://leetcode.com/problems/power-of-three/discuss/1178718/JS-Python-Java-C%2B%2B-or-Easy-Logarithm-and-Modulo-Solutions-w-Explanation

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    while (n > 1) {
        n /= 3
    }
    return n === 1;
};


console.log(isPowerOfThree(3));
console.log(isPowerOfThree(0)); //false
console.log(isPowerOfThree(45)); //false 