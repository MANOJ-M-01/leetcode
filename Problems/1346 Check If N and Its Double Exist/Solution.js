// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

// https://medium.com/steve-cruz/leetcode-check-if-n-and-its-double-exist-60de132b0c85

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 2 * arr[i] && i !== j) {
                return true;
            }
        }
    }
    return false;
};

let arr = [10, 2, 5, 3]; //true
// arr=[-2,0,10,-19,4,6,-8];  //false
// arr = [-20, 8, -6, -14, 0, -19, 14, 4] // true
// arr = [7, 1, 14, 11] //true;
arr = [-10, 12, -20, -8, 15] // true

console.log(checkIfExist(arr));
