// https://leetcode.com/problems/a-number-after-a-double-reversal
/*
Runtime: 62 ms, faster than 93.80% of JavaScript online submissions for A Number After a Double Reversal.
Memory Usage: 41.9 MB, less than 74.45% of JavaScript online submissions for A Number After a Double Reversal.
*/

const rev = (s) => {
    a = "";
    for (let i = s.length - 1; i >= 0; i--) {
        a = a + s[i];
    }
    return a;
}
var isSameAfterReversals = function (num) {
    let s = num.toString();
    a = rev(s);
    s = parseInt(a).toString();
    a = rev(s);
    if (a == num.toString()) return true
    return false;
};

let num = 526;
// num = 1800;
console.log(isSameAfterReversals(num));