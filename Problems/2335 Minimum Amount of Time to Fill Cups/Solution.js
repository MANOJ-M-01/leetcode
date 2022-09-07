// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

var fillCups = function (amount) {
    return Math.max(...amount, Math.ceil(amount.reduce((a, b) => a + b) / 2));
};