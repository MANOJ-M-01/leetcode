// https://leetcode.com/problems/thousand-separator/submissions/

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    if (n < 1000) {
        return n + "";
    }
    let num = n + "";
    let prefix = "";
    for (let i = num.length; i > 0; i = i - 3) {
        prefix = num.substring(i - 3, i) + "." + prefix;
    }
    prefix = prefix.substring(0, prefix.length - 1);
    return prefix;
};

/*
    Input: n = 987
    Output: "987"
    Input: n = 1234
    Output: "1.234"

    123456789
    "123.456.789"
*/

console.log(thousandSeparator(123456789));