// https://leetcode.com/problems/duplicate-zeros/
// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let zeroFound = false;
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (a.length >= arr.length) break;
        if (arr[i] == 0) {
            zeroFound = true;
        } else {
            zeroFound = false
        }
        if (zeroFound) {
            if (a.length + 2 > arr.length) {
                a.push(...[0])
            } else {
                a.push(...[0, 0])
            }
        } else {
            a.push(arr[i])
        }
    }
    arr.length = 0;
    arr.push(...a)
};


let arr = [1, 0, 2, 3, 0, 4, 5, 0] //  [1,0,0,2,3,0,0,4]
// arr = [1,2,3] //  [1,2,3]
// arr=[0,0,0,0,0,0,0] // [0,0,0,0,0,0,0]

console.log(duplicateZeros(arr));
console.log(arr);