// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    let arr = s.split(":");
    let textStart = arr[0];
    let charstart = textStart.charCodeAt(0);
    let textEnd = arr[arr.length - 1];
    let charend = textEnd.charCodeAt(0);
    let RowLen = arr[arr.length - 1][1];
    let res = [];
    for (let i = charstart; i <= charend; i++) {
        let letter = String.fromCharCode(i);
        for (let j = arr[0][1]; j <= RowLen; j++) {
            res.push(letter + j);
        }
    }
    return res;
};

let s = "K1:L2";
// s = "A1:F1";
// s = "U7:X9";
/*
Output
["U1","U2","U3","U4","U5","U6","U7","U8","U9","V1","V2","V3","V4","V5","V6","V7","V8","V9","W1","W2","W3","W4","W5","W6","W7","W8","W9","X1","X2","X3","X4","X5","X6","X7","X8","X9"]
Expected
["U7","U8","U9","V7","V8","V9","W7","W8","W9","X7","X8","X9"]
*/
console.log(cellsInRange(s));


/*
// old slow but working
var cellsInRange = function (s) {
    let arr = s.split(":");
    let textStart = arr[0];
    let charstart = textStart.charCodeAt(0);
    let textEnd = arr[arr.length - 1];
    let charend = textEnd.charCodeAt(0);
    Xhight = 0;
    let UniqueLetter = [];
    for (let i = charstart; i <= charend; i++) {
        let letter = String.fromCharCode(i);
        UniqueLetter.push(letter);
    }
    for (let i = 0; i < arr.length; i++) {
        if (Xhight < arr[i][1]) {
            Xhight = parseInt(arr[i][1]);
        }
    }
    let res = [];
    for (let i = 0; i < UniqueLetter.length; i++) {
        for (let j = arr[0][1]; j <= Xhight; j++) {
            res.push(UniqueLetter[i] + j);
        }
    }
    return res;
};
*/