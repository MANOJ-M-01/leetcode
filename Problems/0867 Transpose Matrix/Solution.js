// https://leetcode.com/problems/transpose-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let arr = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let arr2 = [];
        for (let j = 0; j < matrix.length; j++) {
            arr2.push(matrix[j][i]);
        }
        arr.push(arr2);
    }
    return arr;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose([[1, 2, 3], [4, 5, 6]])) // [[1,4],[2,5],[3,6]]
