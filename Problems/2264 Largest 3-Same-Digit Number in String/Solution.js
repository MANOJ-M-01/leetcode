// https://leetcode.com/problems/largest-3-same-digit-number-in-string/

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let arr = [];
    for (let i = 0; i < num.length; i++) {
        let find = num[i] + num[i] + num[i];
        if (num.includes(find)) {
            arr.push(find);
            i += 2;
        }
    }
    if (arr.length == 1) {
        return arr[0];
    }
    if (arr.length > 1) {
        let res = Math.max(...arr).toString();
        if (res == 0) {
            return "000";
        }
        return res
    }
    return "";
};

let num = "6777133339";
// num = "2300019";
// num = "42352338";
// num="74444";
num = "3200014888";
// num = "000400059";
// num = "00085377750133303";

console.log(largestGoodInteger(num));