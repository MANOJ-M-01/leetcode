// https://leetcode.com/problems/fibonacci-number/
var fib = function (n) {
    if (n < 2) return n;
    let next = 1;
    let last = 0;
    let temp = 0;
    for (let i = 2; i <= n; i++) {
        temp = next;
        next += last;
        last = temp;
    }
    return next;
};


var fib = function (n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};