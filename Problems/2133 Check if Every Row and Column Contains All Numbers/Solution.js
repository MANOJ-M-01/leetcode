// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

var checkValid = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = new Set();
        let col = new Set();
        for (let j = 0; j < matrix.length; j++) {
            row.add(matrix[i][j]);
            col.add(matrix[j][i]);
        }
        if (row.size !== matrix.length || col.size !== matrix.length) {
            return false;
        }
    }
    return true;
};

let matrix = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
];
// matrix = [[1]] //true
matrixs = [
    [15, 7, 18, 11, 19, 10, 14, 16, 8, 2, 3, 6, 5, 1, 17, 12, 9, 4, 13],
    [17, 15, 9, 8, 11, 13, 7, 6, 5, 1, 3, 16, 12, 19, 10, 2, 4, 14, 18],
    [19, 14, 12, 10, 8, 9, 17, 16, 4, 3, 13, 18, 1, 5, 7, 11, 2, 15, 6],
    [4, 2, 10, 15, 19, 16, 8, 9, 5, 3, 1, 11, 13, 14, 6, 18, 12, 17, 7],
    [13, 19, 9, 16, 5, 8, 6, 12, 14, 11, 18, 10, 7, 2, 3, 4, 15, 17, 1],
    [4, 7, 18, 11, 17, 16, 5, 12, 10, 1, 15, 13, 14, 6, 19, 2, 3, 9, 8],
    [14, 5, 15, 1, 18, 6, 12, 7, 8, 9, 3, 13, 2, 10, 19, 4, 11, 16, 17],
    [10, 3, 1, 8, 14, 19, 11, 18, 15, 13, 9, 12, 16, 17, 7, 4, 5, 2, 6],
    [14, 13, 19, 18, 7, 2, 4, 8, 10, 17, 12, 5, 15, 1, 6, 9, 11, 3, 16],
    [19, 8, 10, 18, 16, 12, 11, 17, 4, 9, 7, 2, 5, 13, 15, 3, 6, 1, 14],
    [1, 10, 6, 14, 7, 18, 3, 9, 4, 16, 5, 11, 13, 17, 15, 8, 19, 2, 12],
    [13, 10, 5, 16, 1, 19, 17, 3, 9, 11, 7, 8, 12, 6, 4, 2, 14, 15, 18],
    [17, 2, 1, 6, 9, 19, 18, 14, 4, 11, 12, 13, 16, 5, 8, 7, 3, 10, 15],
    [1, 4, 10, 5, 13, 6, 18, 11, 3, 2, 15, 14, 16, 12, 17, 19, 8, 9, 7],
    [2, 14, 3, 12, 16, 17, 11, 9, 1, 6, 5, 19, 10, 13, 4, 18, 7, 15, 8],
    [15, 9, 8, 18, 14, 13, 4, 12, 5, 17, 6, 1, 11, 16, 19, 3, 7, 2, 10],
    [15, 8, 12, 16, 13, 2, 6, 19, 18, 14, 10, 5, 11, 9, 7, 1, 3, 17, 4],
    [15, 6, 17, 7, 5, 3, 1, 9, 19, 12, 10, 11, 16, 14, 18, 8, 2, 13, 4],
    [6, 11, 10, 14, 2, 13, 16, 1, 9, 15, 8, 19, 17, 3, 5, 18, 7, 4, 12],
];
console.log(checkValid(matrix));

// optimized

/*
Runtime: 170 ms, faster than 55.07% of JavaScript online submissions for Check if Every Row and Column Contains All Numbers.
Memory Usage: 49.8 MB, less than 93.84% of JavaScript online submissions for Check if Every Row and Column Contains All Numbers.
*/
var checkValid = function (m) {
    for (let i = 0; i < m.length; i++) {
        let row = new Set();
        let col = new Set();
        for (let j = 0; j < m.length; j++) {
            row.add(m[i][j]);
            col.add(m[j][i]);
        }
        if (row.size !== m.length || col.size !== m.length) {
            return false;
        }
    }
    return true;
};