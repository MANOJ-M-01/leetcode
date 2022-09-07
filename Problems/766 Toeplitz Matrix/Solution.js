// https://leetcode.com/problems/toeplitz-matrix

var isToeplitzMatrix = function (m) {
    for (let i = 0; i < m.length - 1; i++) {
        for (let j = 0; j < m[i].length - 1; j++) {
            if (m[i][j] !== m[i + 1][j + 1]) {
                return false;
            }
        }
    }
    return true;
};