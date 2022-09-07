// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let n = num.toString()
    let len = n.length < k ? n.length - 1 : n.length;
    let res = 0;
    let arr = [];
    for (let i = 0; i < len; i++) {
        let start = i;
        let end = i + k;
        let a = n.slice(start, end);
        arr.push(a)
        if (a.toString().length == k && num % parseInt(a) === 0) {
            res += 1;
        }
    }
    return res

};

let num = 240
let k = 2
num = 430043
k = 2
num = 2
k = 1
num = 30003
k = 3
// num=625
// k=1
console.log(divisorSubstrings(num, k));

/*
Runtime: 99 ms, faster than 31.80% of JavaScript online submissions for Find the K-Beauty of a Number.
Memory Usage: 42.6 MB, less than 26.25% of JavaScript online submissions for Find the K-Beauty of a Number.
Next challenges:

Runtime: 102 ms, faster than 26.44% of JavaScript online submissions for Find the K-Beauty of a Number.
Memory Usage: 42.3 MB, less than 43.87% of JavaScript online submissions for Find the K-Beauty of a Number.
Next challenges:
*/