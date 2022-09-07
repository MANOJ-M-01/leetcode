// https://leetcode.com/problems/happy-number/
var isHappy = function (n) {
    const set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        }
        set.add(n);
        let sum = 0;
        digits = n.toString().split('');
        for (const digit of digits) {
            sum += Math.pow(parseInt(digit), 2)
        }
        n = sum;
    }
    return true;
}; 