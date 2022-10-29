// https://leetcode.com/problems/add-binary/

/*
Runtime: 83 ms, faster than 75.63% of JavaScript online submissions for Add Binary.
Memory Usage: 44.3 MB, less than 33.06% of JavaScript online submissions for Add Binary.
Next challenges:
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let res = "";
    let carry = 0;
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = (+a[i] || 0) + (+b[j] || 0) + carry;
        res = sum % 2 + res;
        carry = Math.floor(sum / 2);
    }
    if (carry) res = "1" + res;
    return res;
};


let a = "11";
let b = "1" //"100"

// a = "1010", b = "1011" // "10101"
// a = "1010", b = "1110" //11000

console.log(addBinary(a, b));