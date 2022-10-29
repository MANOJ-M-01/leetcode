// https://leetcode.com/problems/valid-mountain-array/
// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

// https://beizhedenglong.github.io/leetcode-solutions/docs/valid-mountain-array

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let maxIndex = null;
    for (let i = 1; i <= arr.length - 1; i++) {
        if (maxIndex === null) {
            if (arr[i] < arr[i - 1]) {
                maxIndex = i - 1;
            } else if (arr[i] === arr[i - 1]) {
                return false;
            }
        } else if (arr[i] >= arr[i - 1]) {
            return false;
        }
    }
    return maxIndex > 0 && maxIndex < arr.length - 1;
}

let arr = [2, 1] //false
// arr = [3,5,5] //false
// arr = [0,3,2,1] //true;

console.log(validMountainArray(arr));