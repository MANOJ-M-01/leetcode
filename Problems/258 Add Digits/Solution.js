// https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
    let sum = num + "";
    if (sum.length == 1) return num;
    while (sum.length != 1) {
        let res = 0;
        for (let i = 0; i < sum.length; i++) {
            res += parseInt(sum[i])
        }
        sum = res + ""
    }
    return parseInt(sum)
};

let num = 38;
console.log(addDigits(num));