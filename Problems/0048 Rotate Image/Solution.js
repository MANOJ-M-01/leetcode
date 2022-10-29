// https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let arr = [];
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = matrix.length - 1; j >= 0; j--) {
            arr.push(matrix[j][i]);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = arr.shift();
        }
    }
};

/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
console.log(rotate(matrix));
console.log(matrix);